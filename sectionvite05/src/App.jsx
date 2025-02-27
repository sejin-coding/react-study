import "./App.css";
import Header from "./components/Header.jsx"; // esg여도 확장자 안써도 됨. 왜냐면 Vite 할때는 안해도 알아서 찾아줌.
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  // 앱 컴포넌트 (부모)
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
} // App Component라고 부름

export default App;
