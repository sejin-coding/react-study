// State를 Props로 전달하기
// 리렌더링 되는 3가지 경우
// 1. 자신이 관리하는 state 값이 변경되었을때 리렌더링
// 2. 자신이 제공받는 props의 값이 ..
// 3. 부모 컴포가 리렌더링되면 자식도 ..

import "./App.css";
import { useState } from "react";

const Bulb = ({ light }) => {
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}

      <div>
        <Bulb light={light} />
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light == "ON" ? "끄기" : "켜기"}
        </button>
      </div>
    </div>
  );
};

const Counters = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

function App() {
  // 앱 컴포넌트 (부모)

  const [light, setLight] = useState("OFF");

  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
} // App Component라고 부름

export default App;
