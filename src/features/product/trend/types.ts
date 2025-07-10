// * 타입 정의
export const TARGET_TYPE_LIST = ['ALL', 'FEMALE', 'MALE', 'TEEN'] as const
export const RANK_TYPE_LIST = ['MANY_WISH', 'MANY_RECEIVE', 'MANY_WISH_RECEIVE'] as const
export type TargetType = (typeof TARGET_TYPE_LIST)[number]
export type RankType = (typeof RANK_TYPE_LIST)[number]

// * 상품 브랜드 정보 인터페이스
export interface BrandInfo {
  id: number
  name: string
  imageURL: string
}

// * 상품 가격 인터페이스
export interface ProductPrice {
  basicPrice: number
  discountRate: number
  sellingPrice: number
}

// * 상품 전체 인터페이스
export interface Product {
  id: number
  name: string
  imageURL: string
  price: ProductPrice
  brandInfo: BrandInfo
}

// * 유효한 TargetType인지 확인하는 함수
export const isValidTargetType = (value: string): value is TargetType => {
  return TARGET_TYPE_LIST.includes(value as TargetType)
}

// * 유효한 RankType인지 확인하는 함수
export const isValidRankType = (value: string): value is RankType => {
  return RANK_TYPE_LIST.includes(value as RankType)
}
