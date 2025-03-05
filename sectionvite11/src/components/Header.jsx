import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>💕오늘은💕 </h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

const memoizedHeader = memo(Header); // Props가 변경되지 않았을때는 리렌더링이 되지 않도록

export default memoizedHeader;
