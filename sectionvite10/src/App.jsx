import { useState, useRef, useReducer, useCallback } from "react";
import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    // const newTodo = {
    //   id: idRef.current++,
    //   isDone: false,
    //   content: content,
    //   date: new Date().getTime(),
    // };

    // setTodos([newTodo, ...todos]);
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  // const onUpdate = (targetId) => {
  //todos State의 값들 중에 targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

  // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
  // setTodos(
  //   todos.map((todo) => {
  //     if (todo.id === targetId) {
  //       return {
  //         ...todo,
  //         isDone: todo.isDone,
  //       };
  //     }
  //     return todo;
  //   })
  // ); 그냥 아래처럼 삼항 연산자로 해도 됨.

  // setTodos(
  //   todos.map((todo) =>
  //     todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
  //   )
  // );

  //   dispatch({
  //     type: "UPDATE",
  //     targetId: targetId,
  //   });
  // };

  // const onDelete = (targetId) => {
  // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
  // setTodos(todos.filter((todo) => todo.id !== targetId));

  //   dispatch({
  //     type: "DELETE",
  //     targetId: targetId,
  //   });
  // };

  // const func = useCallback(() => {}, []);
  // mount 될 때, 즉 최초로 한번만 렌더링 될떄 이 함수를 생성하고 그다음에는 생성하지 않게 됨.
  // 이를 이용해서 onCreate, onDelete, onUpdate 같은 함수가 다시 생성되지 않게 할 수 있음

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
