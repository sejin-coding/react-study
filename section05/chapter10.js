// useRef - 컴포넌트의 변수 생성하기
// useRef : 새로운 Reference 객체를 생성하는 기능
// const refObject = useRef()
// refObject 는 컴포넌트 내부의 변수로 일반적인 값들을 저장할 수 있다.
// useRef : Reference 객체 생성 , 컴포넌트 내부의 변수로 활용 가능 , 어떤 경우에도 리렌더링 유발 XXXXXXXX ( 이게 바로 차이점 ) ---> 렌더링에 영향 미치고 싶지 않을 떄 사용 !!!
// useState : State를 생성, 컴포넌트 내부의 변수로 활용 가능 , 값이 변경되면 컴포넌트 리렌더링

// 자바스크립트로 let count = 0 하고 count++ 하면 되는데 굳이 useCount 써는 이유는 바로바로
// 컴포넌트가 리렌더링이 되는 것은 결국. Register이 다시 호출 되기 때문에. 이렇게 되면 이름을 아무리 많이 수정해도 리렌더링 되기 떄문에 count 는 평생 0으로만 계속 리셋 되는것임.
// useRef는 리렌더링이 되지 않음. 그렇다면 컴포넌트가 리렌더링 될떄 count 변수가 리렌더링 안되게 외부에 하면 안되나??  됨!!!!! but 외부에 선언하게 되면, 한번만 렌더링 하는 상황에서는 되지만, 두번 렌더링하게 되면 아주 치명적인 문제가 생김.

import { useState } from "react";
import { useRef } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value, // 새로운 객체를 만들면서, 프로퍼티 키 자리에다가 대괄호로 변수 이름을 쓰면 (e.target.name) 프로퍼티의 키값으로 정할 수 있음.
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소에 포커스. 거기에 선택되게 즉 input 이름 태그에
      inputRef.current.focus(); //이름에 아무것도 입력안하면 제출하기 넣었을떄 이름 태그에 포커스 되게 할 수 있음.
    }
  };
};
