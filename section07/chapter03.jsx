// useEffect로 라이프사이클 제어하기

import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect, useRef } from "react";
import Even from "./components/even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false); // 아직 이 컴포넌트는 마운트 되지 않았다는 의미로

  // 1. 마운트 : 탄생
  // 마운트를 useEffect로 제어하는 방법
  useEffect(() => {
    console.log("mount");
  }, []); // deps로 빈배열을 출력하면 탄생할 때 딱 한번만 하게 할 수 있음.

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    } // 이 컴포넌트는 이제 App 컴포넌트가 최초로 마운트될 때 실행이 되는데 return으로 바로 돌아가서 최초일떄는 실행이 안되지만, 다시 호출될 때가 되어서야 업뎃 콘솔이 출력이 된다.
    console.log("update");
  });
  // 3. 언마운트 : 죽음

  const Even = () => {
    useEffect(() => {
      return () => {
        console.log("unmount");
      }; //클린업, 정리함수.
    }, []);
    return <div>짝수입니다.</div>;
  };
}
