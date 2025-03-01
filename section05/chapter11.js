// React Hooks : 클래스 컴포넌트의 기능을 함수 컴포넌트에서도 이용할 수 있도록 한 것.

// 옛날에는 Class 컴포넌트로 모든 기능을 이용할 수 있었음. ex) State, Ref, etc...
// Function 컴포넌트는 UI 렌더링하는거 이외에는 아무런 기능을 할 수가 없었음
// 그래서 Class 컴포넌트를 대부분 사용했지만... 문법, 코드가 매우 복잡함!!!
// 그래서 함수 컴포넌트에서도 클래스 컴포넌트처럼 모든 기능을 이용하고 싶었다.

// 그래서 낚아채듯 React Hooks를 개발하게 됨!!!
// useState, useRef 이 친구들이 사실은 React Hooks 였다는 것~
// useState ===> State 기능을 낚아채오는 Hook
// useRef ===> Reference 기능을 낚아채오는 Hook
// 동일한 use 접두사를 쓴게... React Hooks는 이름 앞에 동일한 접두사 use가 붙.는.다.
// 대략 20개 정도 ReactHooks 가 있음.

// 이러한 리액트 훅들은 함수 컴포넌트 내부에서만 호출이 가능하고
// 조건문, 반복문 내부에서는 호출이 불가능.
// 나만의 Hook도 제작 가능 (Custom Hook)
