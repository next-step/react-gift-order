# 단체주문 기능 구현

- refactor: useState 대신 react-hook-form 사용
- feat: 주문하기 모달(단체주문) 구현
- refactor: modal UI 변경
- refactor: modal, 보내는사람 section UI 변경 & HomePage FriendSection 복구
- refactor: 파일명 이해하기 쉽게 변경 & 각 파일 상수들 분리
- refactor: 사용하지 않는 인자 및 interface 삭제
- refactor: 오류문제로 따로 뺴놓았던 type 폴더 삭제 및 해결

todo
- 이번미션 선택사항인 Zod 라이브러리로 유효성 검사를 하도록 리팩터링을 도전했으나, install 하는 과정을 시작해서 사용하기도 전에 오류가 너무 많이 발생해서 일단 그 전 마지막 커밋으로 롤백해서 제출하겠습니다. 제출 후 다시 도전하겠습니다.

질문
-현재 받는사람 모달 컴포넌트에서 여러명의 받는 사람 정보를 배열 형태로 관리하려고 useForm과 useFieldArray를 사용하고, OrderPage에서 모달에 배열과 onComplete 함수사용을 위해 useState로 배열을 선언하고 props로전달해주었는데 , 
과제에 폼 데이터 관리시 useState를 직접 사용하지 말라고 되어 있는게 걸립니다. 
OrderPage에서 state로 선언한 배열은 받는사람모달 내부의 진행중인 폼데이터가 아니고, 완료버튼을 눌러 확정된 결과 데이터여서 Controlled Component처럼 리렌더링 문제가 생기는 것 같지는 않다고 생각하긴 하는데, props로 전달해줄 배열을 state로 선언하는게 맞는건가 생각이 들기도 합니다..
