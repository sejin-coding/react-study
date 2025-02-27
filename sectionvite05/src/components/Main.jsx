const Main = () => {
  const user = {
    name: "박세진",
    isLogin: false,
  };

  if (user.isLogin) {
    return (
      <div
        style={{
          backgroundColor: "red",
          borderBottom: "5px solid blue",
        }}
      >
        로그아웃
      </div>
    );
  } else {
    return <div>로그인</div>;
  }

  //return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
  // 둘 중 하나 방식 하면 됨.
};

export default Main;
