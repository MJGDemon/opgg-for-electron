import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

import { ApiType } from 'api-type'

// Custom APIs for renderer
const api: ApiType = {
  // get: () => ipcRenderer.invoke('getMessage')
  async getChampionRankList(params) {
    const res = await ipcRenderer.invoke('getChampionRankList', params)
    console.log(res)
    return res
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
