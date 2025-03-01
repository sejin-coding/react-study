// 3가지 hook 관련된 팁들을 살펴보자.
// 1. 훅은 함수 컴포넌트 이거나 커스텀 훅 내부에서만 호출이 가능하다.
// 2. 훅은 조건부로 호출될 수는 없다. --> 서로 다른 훅들의 호출 순서가 얽히면서 엉망이 됨.
// 3. 나만의 훅 (Custon Hook)을 직접 만들 수 있다.

// 이렇게 인풋을 넣을때마다 state 생성해주고, change 해주고  <input value={input} onChange={onChange} /> 이렇게까지 쓰고 매번 하는거 번거로움
// 별도의 함수로 만들어보면 더 깔끔할 듯!!

// 보통은 src 안에 hooks 폴더 만들어서 훅만 따로 보관 ex. useInput.jsx

import { useState } from "react";

//const state = useState(); 1. 이렇게 하면 안된다는 것!!!!!

// 이게 바로 커스텀 훅.
function useInput() {
  // 접두사로 use만 붙여주면 훅 만들어지는것. 훅안에 훅이 있네!!!
  const [input, setInput] = useState(""); //함수 밖에 하면 안되니까 커스텀 훅으로 만들어주는것.

  const onChange = (e) => {
    setInput(e.target.value);

    return [input, onChange];
  };
}

const HookExam = () => {
  // if (true) {
  //   const state = useState();
  // } 2. 이렇게 하면 안됨

  // const [input, setInput] = useState("");
  // const onChange = (e) => {
  //   setInput(e.target.value);
  // };

  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
