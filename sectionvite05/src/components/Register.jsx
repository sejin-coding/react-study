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

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option></option> //이렇게 하면 처음에 빈칸으로 뜸.
          <option value={"kr"}>한국</option> // 이렇게 하면 한국 눌렀을 때 value
          값 출력 가능
          <option>미국</option>
          <option>영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onSubmit}>제출하기</button>
    </div>
  );
};

export default Register;
