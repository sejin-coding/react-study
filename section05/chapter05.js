// 이벤트 : 웹 내부에서 발생하는 사용자의 모든 행동을 일컫는 말. ex) 버튼 클릭, 메세지 입력, 스크롤 등등
// 핸들링: 다루다, 취급하다, 처리하다.
// 이벤트 핸들링 : 이벤트가 발생했을 때 그것을 처리하는 것. ex) 버튼 클릭시 경고장 노출

const Button = ({ children, text, color = "black" }) => {
  //매개변수로 이벤트 객체
  const onClickButton = (e) => {
    console.log(e); // SyntheticBaseEvent라고 출력됨. 합성 이벤트 객체: 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태. 모든 브라우저에서 활용할 수 있는. 
    console.log(text);
  }; //길때는 위에 따로 선언하면 됨.

  return (
    <button
      onClick={() => {
        console.log(text);
      }}
      style={{ color: color }} // 또는 <button onClick={onClickButton}>
    >
      {text}-{color.toUpperCase()}
      {children}
    </button>
  );
};

// 조심해야하는게 onMouseEnter={onClickButton}인데 onClickButton()이라고 하면 안됨.

// Cross Browsing Issue : 브라우저 별 스펙이 달라 발생하는 문제
// 이걸 해결해주는게 리액트에서 바로 합성 이벤트 : 모든 브라우저에서의 이벤트 객체를 하나로 통일한 형태
// 통일된 규칙으로 