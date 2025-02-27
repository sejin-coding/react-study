import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const Hello = () => {
  return <div>hello</div>;
}; // 밑에 App을 Hello로 바꾸면 Hello가 루트가 됨.

createRoot(document.getElementById("root")).render(<App />);
