export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  MY: '/my',
  ORDER: (id: number | string) => `/order/${id}`,
  ORDER_PATH: '/order/:id',
  NOT_FOUND: '*',
} as const;
