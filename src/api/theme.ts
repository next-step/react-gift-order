export interface Theme {
  themeId: number;
  name: string;
  image: string;
}

export interface ThemeDetail {
  themeId: number;
  name: string;
  title: string;
  description: string;
  backgroundColor: string;
}

export interface ThemeProduct {
  id: number;
  name: string;
  price: {
    basicPrice: number;
    sellingPrice: number;
    discountRate: number;
  };
  imageURL: string;
  brandInfo: {
    id: number;
    name: string;
    imageURL: string;
  };
}

export interface ThemeProductListResponse {
  list: ThemeProduct[];
  cursor: number;
  hasMoreList: boolean;
}

export const getThemes = async (): Promise<Theme[]> => {
  try {
    const response = await fetch("http://localhost:3000/api/themes");
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.data?.message || "테마 목록을 불러오는데 실패했습니다."
      );
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Failed to fetch themes:", error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(
      "네트워크 오류 또는 알 수 없는 테마 목록 조회 오류가 발생했습니다."
    );
  }
};

// ⭐ 새로 추가할 API 함수: 테마 상세 정보 조회
export const getThemeInfo = async (themeId: number): Promise<ThemeDetail> => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/themes/${themeId}/info`
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.data?.message || "테마 상세 정보를 불러오는데 실패했습니다."
      );
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(`Failed to fetch theme info for ${themeId}:`, error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(
      "네트워크 오류 또는 알 수 없는 테마 상세 정보 조회 오류가 발생했습니다."
    );
  }
};

export const getThemeProducts = async (
  themeId: number,
  cursor: number = 0,
  limit: number = 10
): Promise<ThemeProductListResponse> => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/themes/${themeId}/products?cursor=${cursor}&limit=${limit}`
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.data?.message || "테마별 상품 목록을 불러오는데 실패했습니다."
      );
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(`Failed to fetch products for theme ${themeId}:`, error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(
      "네트워크 오류 또는 알 수 없는 테마별 상품 목록 조회 오류가 발생했습니다."
    );
  }
};
