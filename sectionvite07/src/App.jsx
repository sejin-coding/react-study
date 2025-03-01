import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect, useRef } from "react";
import Even from "./components/even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false); // 아직 이 컴포넌트는 마운트 되지 않았다는 의미로

  // 1. 마운트 : 탄생
  // 마운트를 useEffect로 제어하는 방법
  useEffect(() => {
    console.log("mount");
  }, []); // deps로 빈배열을 출력하면 탄생할 때 딱 한번만 하게 할 수 있음.

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    } // 이 컴포넌트는 이제 App 컴포넌트가 최초로 마운트될 때 실행이 되는데 return으로 바로 돌아가서 최초일떄는 실행이 안되지만, 다시 호출될 때가 되어서야 업뎃 콘솔이 출력이 된다.
    console.log("update");
  });
  // 3. 언마운트 : 죽음

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;

/* Viewer와 Controller는 부모 자식 관계가 아니기 때문에, 어떠한 값도 서로 공유할 수가 없음. 따라서 부모 컴포에서 state를 정해야 함.  */
// props는 오직 부모에서 자식으로만 전달될 수 있음. 형제 관계면 서로 props로 어떠한 값도 전달할 수가 없음

// 계층 구조를 형성하는데 Props 를 전달하려면 반드시 두 컴포는 부모 자식 관계를 가지고 있어야 한다는 점 --> State Lifting
// 데이터는 위에서 아래로 부모에서 자식으로 단방향 데이터 흐름으로함. 파악하기 매우 쉽고 직관적임. 그래서 이것을 고려하여
// 데이터의 원천인 State를 어떤 컴포넌트에 위치시킬지 고민을 해야함. 이것이 바로 State 끌어올리기. State Lifting
