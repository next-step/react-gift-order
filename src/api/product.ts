// src/api/product.ts

// ⭐ 모든 인터페이스 및 타입 정의에 'export' 추가
export interface ProductPrice {
  basicPrice: number;
  sellingPrice: number;
  discountRate: number;
}

export interface BrandInfo {
  id: number;
  name: string;
  imageURL: string;
}

export interface Product {
  id: number;
  name: string;
  price: ProductPrice;
  imageURL: string;
  brandInfo: BrandInfo;
}

export type TargetType = "ALL" | "FEMALE" | "MALE" | "TEEN";
export type RankType = "MANY_WISH" | "MANY_RECEIVE" | "MANY_WISH_RECEIVE";

export interface AnnouncementItem {
  name: string;
  value: string;
  displayOrder: number;
}

export interface ProductDetail {
  description: string;
  announcement: AnnouncementItem[];
}

// ----------------------------------------------------
// API 함수들

const BASE_URL = "http://localhost:3000";

// 상품 랭킹 조회 API
export const getRankingProducts = async (
  targetType: TargetType,
  rankType: RankType
): Promise<Product[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/products/ranking?targetType=${targetType}&rankType=${rankType}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.data?.message || "상품 랭킹 조회 실패");
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(`Failed to fetch ranking products:`, error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(
      "네트워크 오류 또는 알 수 없는 상품 랭킹 조회 오류가 발생했습니다."
    );
  }
};

// 상품 기본 정보 조회 API
export const getProductInfo = async (productId: number): Promise<Product> => {
  try {
    const response = await fetch(`${BASE_URL}/api/products/${productId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.data?.message || "상품 기본 정보 조회 실패");
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(`Failed to fetch product info for ${productId}:`, error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(
      "네트워크 오류 또는 알 수 없는 상품 기본 정보 조회 오류가 발생했습니다."
    );
  }
};

// 상품 상세 정보 조회 API
export const getProductDetail = async (
  productId: number
): Promise<ProductDetail> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/products/${productId}/detail`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.data?.message || "상품 상세 정보 조회 실패");
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(`Failed to fetch product detail for ${productId}:`, error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(
      "네트워크 오류 또는 알 수 없는 상품 상세 정보 조회 오류가 발생했습니다."
    );
  }
};
