import { useAuth } from '@/shared/contexts/auth'
import { ROUTE_PATH } from '@/app/Router'
import type { ComponentType, ReactElement } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

// * 로그인 인증 여부를 확인하는 HOC 정의
export function withAuth<P extends object>(ChildrenComponent: ComponentType<P>): ComponentType<P> {
  return function AuthProtectComponent(props: P): ReactElement {
    const { isLogin, isInitialized } = useAuth()
    const location = useLocation()

    // * 초기화가 완료되지 않았으면 로딩 표시 (또는 아무것도 렌더링하지 않음)
    if (!isInitialized) {
      return <div>로딩 중...</div>
    }

    // * 로그인 상태가 아닐 때 로그인 페이지로 이동
    if (!isLogin) {
      return <Navigate to={ROUTE_PATH.LOGIN} state={{ from: location.pathname }} replace />
    }

    // * 로그인 상태일 때 원래 컴포넌트 렌더링
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return <ChildrenComponent {...(props as any)} />
  }
}
