import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
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
