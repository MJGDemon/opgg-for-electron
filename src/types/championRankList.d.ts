declare module 'championRankList' {
  export type Position = 'top' | 'jungle' | 'mid' | 'adc' | 'support'

  export interface GetChampionRankListParams {
    position: Position
  }

  export interface GetChampionRankListRes {
    list: ChampionRankListItem[]
  }

  export interface ChampionRankListItem {
    id: number
    name: string
    key: string
    avatar: string
    banRate: number
    pickRate: number
    winRate: number
    rank: number
  }
}
