## 프로젝트 컴포넌트 분류 철학

1. Page는 Section으로 이루어져있다.
2. Section은 Component로 이루어져있다.
3. 각 Component는 Header, Action, Field, Table, Cards로 구성한다.
4. 각 Component 중 Cards형태는 재사용성을 위해서 따로 Cards로 분류해놓는다.
5. 각 Page에서 사용할 수 있는 공통적으로 사용가능한(추상화된) 컴포넌트는 common에 분류한다.

## 왜 이런식으로 분류했는가?

재사용성을 극대화하고 차후 유지보수를 하기위해서 한눈에 알아보는 구조가 필요했다. 전체적인 로직에 대한 이해도가 필요하긴하지만 유지보수성이 극대화될것이라고 예상한다. (각 컴포넌트별로 하나의 기능만을 분류)

## 예상되는 문제점

Cards하나만 return하는 Section으로 인해 Props Drilling이 발생할것이라고 예상된다.
