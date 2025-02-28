// State로 사용자 입력 관리하기

import { useState } from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value); // 사용자가 입력한 input값을 전해줌.
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input onChange={onChangeName} placeholder={"이름"} />
      </div>
      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
      </div>
      <div>
        <select value={country} onChange={onChangeCountry}>
          <option></option> //이렇게 하면 처음에 빈칸으로 뜸.
          <option value={"kr"}>한국</option> // 이렇게 하면 한국 눌렀을 때 value
          값 출력 가능
          <option>미국</option>
          <option>영국</option>
        </select>
      </div>
      <div>
        <textarea value={bio} onChange={onChangeBio} />
        {bio}
      </div>
    </div>
  );
};

export default Register;

// input하면 입력 박스가 나오고
// placeholder는 input에서 아무것도 입력하지 않았을때 회색으로 설명?이 나옴

// 이름이 바뀌면 name에 저장이 되게.

// <div> 를 하면 각각 한줄을 차지해서 칸이 내려오게 됨.

// e는 이벤트 객체임. 컨솔로 e.target.value가 사용자가 입력한 값인거 확인함.

// 국적처럼 뭘 선택하는거는 select랑 option 이용하면 됨

// textarea는 input 태그와는 달리 여러줄을 입력 받을 수 있음
