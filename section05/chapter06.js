// State : 상태 관리하기
// 새로운 State를 생성하는 useState라는 함수는 인수로는 초기값을 받아서 두개의 배열은 반환한다.
// 첫번째 요소는 State의 현재값이고 두번째 요소는 State를 변경시키는 상태 변환 함수
// import { useState } from "react";
// const [state, setState] = useState(0);

// <h1>{state}</h1>
//       <button
//         onClick={() => {
//           setState(state + 1);
//         }}
//       >
//         +
//       </button>

import "./App.css";
import { useState } from "react";

function App() {
  // 앱 컴포넌트 (부모)

  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light == "ON" ? "끄기" : "켜기"}
        </button>
      </div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </>
  );
} // App Component라고 부름

export default App;

// 굳이 state 를 만드는 이유는 ---> let으로 하면 리렌렌더링이 되지 않기 때문
// 리액트 컴포넌트는 일반적인 변수가 아니라 state 값이 변할때만 렌더링이 다시 되기 때문임.
