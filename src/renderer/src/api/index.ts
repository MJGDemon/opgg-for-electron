import { GetChampionRankListParams } from 'championRankList'

export const getChampionRankListApi = async (params: GetChampionRankListParams) => {
  const res = await window.api.getChampionRankList(params)

  return res
}
