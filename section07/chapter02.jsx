// useEffect 리액트 컴포넌트의 사이트 이펙트를 제어하는 새로운 React Hook
// 사이트 이펙트?? -> 부작용 보다는 완화된 뜻으로 리액트에서는 "부수적인 효과", "파생되는 효과" 정도로 해석
// ex) 과식을 하면 살이 찐다. ===> 살이 찐다가 파생되는 효과. 즉 사이드 이펙트.
// 즉 리액트 컴포넌트의 사이드 이펙트 : 컴포넌트의 동작에 따라 파생되는 여러 효과
//          동작          ==========>           사이드 이펙트
// 컴포넌트 내부의 값 변경                    큰솔에 변경된 값 출력
//      컴포넌트 마운트                     큰솔에 "Mount"라고 출력
// 컴포넌트 업데이트(리렌더)                 큰솔에 "Update"라고 출력
//      컴포넌트 언마운트                   큰솔에 "Unmount"라고 출력

// 즉 useEffect를 이용하면 이렇게 컴포넌트에서 어떠한 값이 변경이 되었을 때 특정 코드를 실행시키거나 라이프 사이클을 제어할 수 있다.

import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]); // 첫번째 인수로는 callback 함수가, 두번째 인수로는 배열 넣어서, 두번째 값이 바뀌면 첫번째 콜백 함수를 실행시켜준다.
  // 두번째 배열에 의존하기 떄문에 의존성 배열 = dependency array = deps 라고 부름. 여기에 값 여러개 넣어도 됨.

  const onClickButton = (value) => {
    setCount(count + value);
  };
}
