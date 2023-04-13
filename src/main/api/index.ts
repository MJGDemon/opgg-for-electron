import { GetChampionRankListParams, GetChampionRankListRes } from 'championRankList'
import fetch from 'node-fetch'

export const getChampionRankList = async (
  params: GetChampionRankListParams
): Promise<GetChampionRankListRes> => {
  const param = new URLSearchParams({
    region: 'global',
    tier: 'platinum_plus',
    ...params
  })
  const response = await fetch(
    `https://www.op.gg/_next/data/ZxhWzawAuPONWstyZFr1G/champions.json?${param}`,
    {
      headers: {
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8'
      }
    }
  )
  // console.log(response)
  const data = (await response.json()) as GetChampionRankListRes
  return data
}
