// 리액트 컴퍼넌트가 화면에 나타나는 UI 요소들을 표현할 수 있도록 해주는 JSX를 배워보자
// JSX란 : 확장된 자바스크립트 문법 JavaScript Extensions
// JS와 HTML을 혼용해서 사용하게 가능

// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식 (삼항연산자, 값, 변수 등) 만 넣을 수 있다.
// 중괄호 안에 if문이나 for문 쓰면 안됨. 값으로써 표현될 수 없기 때문에 자바스크립트 표현식이 아님.

// 2. JSX에서는 숫자, 문자열, 배열 값만 정상적으로 렌더링 된다.
// {true} , {null} 등은 화면에 렌더링되지 않음
// {obj} 객체를 넣으면 오류 뜸. Object 객체는 그대로 렌더링할 수 없음. {obj.name} 이거는 가능

// 3. 모든 태그는 닫혀있어야 한다.
// 여는 태그가 있으면 닫는 태그도 있어야해. <img></img> 또는 셀프 클로징 <img/>

// 4. 최상위 태그(보통 main 태그)는 반드시 하나여야만 한다.
// 빈태그 최상위 태그 필없으면 <></> 로 해도 됨. 오류 없이 없는걸로 렌더링이 됨.

const Main = () => {
  const user = {
    name: "박세진",
    isLogin: false,
  };

  if (user.isLogin) {
    return <div>로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }

  //return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
  // 둘 중 하나 방식 하면 됨.
};

export default Main;

// 카멜 케이스 backgroundColor처럼 뒤에를 대문자로 하는 것.

// 1. Css 적용하는 방법 두가지. 컴포넌트 안에 style={{}} 넣기
<div
  style={{
    backgroundColor: "red",
    borderBottom: "5px solid blue",
  }}
></div>;

// 2. 따로 만들기
// .logout {
//   background-color: red;
//   border-bottom: 5px solid green;
// }

// return <div className="logout">로그아웃</div>;
