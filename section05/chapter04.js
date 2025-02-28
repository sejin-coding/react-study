// Props
// 부모가 자식 컴포넌트한테 원하는 값을 전달하는게 가능한데 컴포넌트에 전달된 값을 Props 라고 함.

const Button = ({ text, color = "black" }) => {
  return (
    <button style={{ color: color }}>
      {text}-{color.toUpperCase()}
    </button>
  );
}; // color 와 text 로 구조분해 할당. 디폴트 값 = "black"

function App() {
  // 앱 컴포넌트 (부모)

  const buttonProps = {
    // 밑에처럼 너무 props가 길면 객체로 만들 수도 있음. 이렇게
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
      <Button text={"메일"} color={"red"} a={1} b={1} c={3} />
      <Button text={"카페"} {...buttonProps} /> // 위에 객체를 이렇게
      넣어줘야함.
      <Button text={"블로그"} />
    </>
  );
} // App Component라고 부름
