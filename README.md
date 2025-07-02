# 미션 2 - 0단계 기본 코드 준비

## 프로젝트 진행 과정

### 미션 1 완료

- **이전 레포지토리**: [react-gift-login](https://github.com/jjw5655/react-gift-login)
- **내용**: 카테캠 2단계 - 미션1 홈과 로그인 페이지 구현 완료

### 미션 2 시작 - 기본 코드 준비

1. **새 레포지토리 fork**: [next-step/react-gift-order](https://github.com/next-step/react-gift-order) 에서 fork
2. **기존 코드 이전**: 미션 1 완료 레포지토리에서 `.git`과 `node_modules`를 제외한 모든 파일 복사
3. **현재 상태**: 미션 1의 모든 구현 내용이 포함된 상태로 미션 2 시작 준비 완료

기존 구현 활용: 미션 1에서 완성한 홈, 로그인, 라우팅 기능을 그대로 이어서 미션2에서 개발 진행.

## 미션 1 - 3단계 리뷰 반영사항

- Main 컴포넌트 중첩 문제 해결: App.tsx에서 중복 래핑 제거
- Button 컴포넌트 타입 개선: ComponentPropsWithoutRef로 기본 속성 자동 상속
- 라우트 경로 상수화: App.tsx에서 경로 문자열 상수로 관리
- 뒤로가기 버튼 동작 개선: 항상 홈으로 이동하도록 단순화
- MoreButton 스타일 통일: inline style → emotion/styled 적용
- RankingSection 함수 중복 제거: Generic 함수 및 공통 핸들러로 통합
