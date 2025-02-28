const Button = ({ children, text, color = "black" }) => {
  const onClickButton = () => {
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

export default Button;
