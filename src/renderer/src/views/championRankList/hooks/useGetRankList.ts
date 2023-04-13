import { getChampionRankListApi } from '@renderer/api'
import { GetChampionRankListParams } from 'championRankList'

const useGetRankList = () => {
  const getChampionRankList = async (params: GetChampionRankListParams) => {
    const res = await getChampionRankListApi(params)
    return res
  }
  return {
    getChampionRankList
  }
}

export default useGetRankList
