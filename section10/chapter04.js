// useCallback과 불필요한 함수 재생성 방지
// memo는 얕은 비교라 객체 타입에서는 안되어서 콜백함수로 일일이 props 값이 바뀌었는지 비교를 해야했음
// 일일이 비교는 상당히 귀찮음. 이럴때는 그냥 onUpdate, onDelete 같은 함수가 애초에 다시 생성되지 않도록 최적화 하는게 낫다.

// 이런 최적화를 언제 하느냐 어떻게 하느냐가 중요할 수 있음. 너무 일러도, 너무 많이 해도 문제가 될 수 있다.
// 프젝을 완성한 상태에서 보통 최적화 하게 됨.
// 1. 기능 -> 2. 최적화 왜냠 기능 추가되거나 고장나는 경우도 있음

// 어떤게 최적화 대상이 되어야 하는건가?? 모든거 말고 꼭 되어야할 것 같은것만 적용하는게 좋음
// Memo와 같은 메서드도 당연히 연산이 필요한 것들임. 별것도 아니면 그냥 리렌더링 되게 냅두는것도 나쁘지 않음
// 근데 TodoItem 처럼 유저 행동에 따라 달라지거나 컴포넌트 많은 무거운 것들이라면 그것들만 최적화 시키는 것을 추천!!
// 모든 것은 기능 구현이 먼저~

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
