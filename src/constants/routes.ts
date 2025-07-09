const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  MY_PAGE: '/my',
  ORDER_DETAIL_BASE: '/order/:id',
  NOT_FOUND: '*',
} as const;

export default ROUTES;