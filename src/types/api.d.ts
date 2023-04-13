declare module 'api-type' {
  import { GetChampionRankListParams, GetChampionRankListRes } from 'championRankList'
  export interface ApiType {
    getChampionRankList: (params: GetChampionRankListParams) => Promise<GetChampionRankListRes>
  }
}
