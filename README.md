# react-gift-login

## 구현할 기능 목록
[ ] 주문 폼 - 폼 처리
      [ ] 0단계 - 기본 코드 준비
      [ ] 1단계 - 로그인 기능 구현
            - 기능 단위로 나누어 커밋.
            -> LoginPage 컴포넌트 생성 및 Emotion을 활용한 스타일 분리 진행
            -> Login 폴더 구조 정리 (LoginPage.tsx, Login.style.ts, useLoginForm.ts 등)

            [X] ID는 아래의 조건에 맞게 동작해야 함.  
                  - ID는 반드시 입력되어야 함.  
                  - ID는 이메일 형식이어야 함.  
                  - ID Input Field를 벗어났을 때 조건이 충족되지 않으면 에러 메시지를 보여줌.  
                  - 조건이 충족되면 에러 메시지가 사라져야 함.  
                  -> useLoginForm 훅에서 상태와 유효성 검사 로직 관리  
                  -> 에러 발생 시 스타일 변경 (빨간색 하이라이트 및 메시지 출력)  

            [X] PW는 아래 조건에 맞게 동작해야 함.  
                  - PW는 최소 8글자 이상 입력되어야 함.  
                  - PW Input Field를 벗어났을 때 조건이 충족되지 않으면 에러 메시지를 보여줌.  
                  - 조건이 충족되면 에러 메시지가 사라져야 함.  
                  -> useLoginForm 훅에서 상태와 유효성 검사 로직 관리  

            [X] 로그인 버튼은 아래 조건에 맞게 동작해야 함.  
                  - ID 조건과 PW 조건이 모두 충족되어야 버튼이 활성화되어야 함.  
                  -> useMemo를 사용해 `isValid` 값 계산  
                  -> 조건 만족 시에만 버튼 활성화 및 색상 변경 적용

            [X] 커스텀 훅으로 리팩터링  
                  - LoginFormSection에서 useState를 직접 사용하지 않고, useLoginForm 훅을 사용해 상태 관리  
                  -> 재사용 가능한 커스텀 훅으로 email, password, 에러 메시지, 유효성 검사 함수들을 모두 분리  
                  -> handleLogin 함수도 커스텀 훅 내에서 처리하여 navigate 로직까지 훅 내부에서 관리  
                  -> 실시간 입력 시 유효성 검사가 반영되도록 handlePasswordChange에 검사 로직 포함

      [ ] 2단계 - 주문하기 페이지 구현
      [ ] 3단계 - 단체 주문 기능 구현