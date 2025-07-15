# 단체주문 기능 구현

- refactor: useState 대신 react-hook-form 사용
- feat: 주문하기 모달(단체주문) 구현
- refactor: modal UI 변경
- refactor: modal, 보내는사람 section UI 변경 & HomePage FriendSection 복구
- refactor: 파일명 이해하기 쉽게 변경 & 각 파일 상수들 분리
- remove: 사용하지 않는 인자 및 interface 삭제
- remove: 오류문제로 따로 뺴놓았던 type 폴더 삭제 및 해결
+
- refactor: LoginContext storage key, 오류 메세지상수화
- refactor: ReceiverModal 유효성 검사 Zod라이브러리 리팩터링
- refactor: 보내는 사람 Zod 리팩터링
+
- refactor: 사용하지 않는 훅 제거 및 정렬 수정
- fix : eol 이슈 해결
- refactor: defaultReceiver 선언 및 재사용
- remove: SenderForm 쓸데없는 fragment 삭제
- remove: 테스트 코드 삭제
- refactor: useOrderForm 커스텀 훅을 통한 OrderPage 로직 파일 분리
- refactor: ReceiverModal 커스텀 훅, 스키마 파일 분리
- refactor: useModal 커스텀 훅 파일 구현 및 모달 관련 상태 관리 로직 수정 

#todo
- 이번미션 선택사항인 Zod 라이브러리로 유효성 검사를 하도록 리팩터링을 도전했으나, install 하는 과정을 시작해서 사용하기도 전에 오류가 너무 많이 발생해서 일단 그 전 마지막 커밋으로 롤백해서 제출하겠습니다. 제출 후 다시 도전하겠습니다.
- + 리팩토링 완료했고, 추가했습니다.

#추가로 고민해봐야 할 것
- message는 현재 유효성 검사할 내용이 없어 고려하지 않았음
- 스키마, 타입도 다른 파일로 분리하면 재사용성이 좋을 듯
- 현재는 OrderPage와 ReceiverModal 총 두개의 useForm을 쓰는데, 여기서 FormProvider로 제일 상위에서 컨텍스트로 감싸고 자식에서 useFormContext 사용하면 좋지 않을까 생각했지만, 현재 props drilling이 한단계만 진행되고 있기에 최대한 전역상태관리는 지양
- totalQuantity 계산하는 부분이 마음에 걸림.(현재 리렌더링마다 계산하는..?) memo를 쓰는것도 고려해볼 만한?
- style 작성하는 법도 이번 스텝에서 갑자기 원래 이렇게 길게 다 가져오나 싶어서, 서칭 후 import * as S from './styles'; 이후 S. … 으로 작성했는데, 이전 파일들과 통일성을 해치는 중. 통일하여 하나의 방법으로 사용해야 할 듯..

#질문
-현재 받는사람 모달 컴포넌트에서 여러명의 받는 사람 정보를 배열 형태로 관리하려고 useForm과 useFieldArray를 사용하고, OrderPage에서 모달에 배열과 onComplete 함수사용을 위해 useState로 배열을 선언하고 props로전달해주었는데 , 
과제에 폼 데이터 관리시 useState를 직접 사용하지 말라고 되어 있는게 걸립니다. 
OrderPage에서 state로 선언한 배열은 받는사람모달 내부의 진행중인 폼데이터가 아니고, 완료버튼을 눌러 확정된 결과 데이터여서 Controlled Component처럼 리렌더링 문제가 생기는 것 같지는 않다고 생각하긴 하는데, props로 전달해줄 배열을 state로 선언하는게 맞는건가 생각이 들기도 합니다..


#멘토님 피드백(25/07/13)
- eol 이슈 => 해결
- 상수 관리 방식 소개
  1. constants 폴더 하위에 관련된 상수 파일별로 분리
  2. constants 객체로 관리
- 기본값 defaultReceivers 선언 => 반영
- 필요없는 fragment 삭제 => 반영
- Modal 사용에 필수적인 부분 custom hook으로 (isOpen, onOpen , ...)
  => 해결 :
          - useModal 커 스텀 훅
          - 어떤 컴포넌트든 모달이 필요하면 useModal 가져와서 사용
          - 제어 상하 관계의 역전? : 기존에는 OrderPage가 ReceiverSelectBox의 onAddClick과 ReceiverModal의 onClose 등을 직접 연결해주었음. (OrderPage가 자식 컴포넌트 상호작용 제어)
          - -> Trigger prop, React.cloneElement 사용하여
          - 제어관계 역전 : 모달을 여는 onClick이벤트를 연결하는 제어권이 ReceiverModal로 이동
          - 유연성? : Trigger가 뭐든 상관 없게 (ReceiverSelectBox이든, 다른 무엇이든) 어떤 컴포넌트는 Trigger로 전달받으면 React.cloneElement를 통해 onClick(onOpen)으로 렌더링
- 테스트용 로그 삭제 => 반영
- OrderPage 로직 분리 => 반영
- ReceiverModal 로직, 스키마 분리 => 반영
