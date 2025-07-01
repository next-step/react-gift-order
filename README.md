
# react-gift-login

<details>
<summary>1단계 구현기능 목록 보기</summary>
<div markdown="1">

## 📌 1단계 - 구현한 기능 목록

### 1. 기본 설정

- 불필요한 파일 및 코드 정리
- README 작성

### 2. Alias 설정

- 절대경로 import를 위한 alias 설정

### 3. Prettier 설정

- Prettier 설치
- 프로젝트 내 코드 포매팅 적용

### 4. Emotion 스타일 라이브러리 적용

- `@emotion/react`, `@emotion/styled` 설치
- 전역 스타일(GlobalStyle) 적용

### 5. 기본 폰트 설정

- Pretendard 폰트를 기본 폰트로 적용

### 6. reset.css 적용

- 전역 스타일(GlobalStyle) 에 포함시키기

---

### 리팩토링 1 : 타입스크립트 설치

### 리팩토링 2 : alias 적용해 코드수정

- alias가 인식 안되던 문제 해결
- tsx파일들을 alias 주소를 사용하도록 수정

### 리팩토링 3 : 빌드

- 프로젝트 빌드 결과물(dist) 추가

</div>
</details>

<details>
<summary>2단계 구현기능 목록 보기</summary>
<div markdown="1">
  
## 📌 2단계 - 구현한 기능 목록

### 1. 디자인 토큰 설정

- emotion에 Color, Typography 토큰을 설정

### 2. Mobile First Layout 기반 환경 구축

- 화면의 max-width를 720px으로 제한

### 3. UI - 상단 네비게이션 바

### 4. UI - 카테고리

- Flex, Grid 등을 활용

### 5. UI - 기타 섹션

- 선물한 친구 선택 UI 구현
- 카테캠 화이팅 배너 구현

### 5. UI - 실시간 급상승 선물랭킹

- 목 데이터 기반 랭킹 UI 구현

</div>
</details>

<details>
<summary>3단계 구현기능 목록 보기</summary>
<div markdown="1">

## 📌 3단계 - 구현한 기능 목록

### 1. 🔐 로그인 기능

- `/login` 페이지 접속 시 로그인 화면 표시
- 로그인 버튼 클릭 시 이전 페이지로 리디렉션 (없을 경우 `/`으로 이동)
- 로그인 상태 유지 기능은 구현하지 않음 (단순 라우팅 기반)

### 2. 🚫 Not Found 페이지

- 존재하지 않는 경로로 접근 시 Not Found 페이지로 이동

### 3. 🧭 네비게이션 바

- 로그인 버튼 추가 (로그인 페이지로 이동)
- 뒤로가기 버튼 추가 (이전 페이지로 이동)

### 4. 🎁 선물하기 메인 페이지 - 실시간 급상승 선물랭킹

- 성별/주제 필터 적용 시 새로고침 이후에도 필터 상태가 유지되도록 구현 (URL 파라미터 또는 상태 저장 방식 활용)
- 버튼, 카드 등 공통 요소를 별도의 컴포넌트로 분리하여 재사용성 향상

---
### 리팩토링

- 글로벌 스타일에 Pretendard 웹폰트 적용 안되는 문제 해결

- 목데이터에 타입 추가 및 아이디값을 다르게 하도록 맵함수 추가

</div>
</details>

---

# react-gift-order

