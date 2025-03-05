import {
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
} from "react";
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

// 새로운 Context 객체를 하나 만들어보자. App 컴포 밖에 선언하는게 일반적임.
export const TodoContext = createContext();
console.log(TodoContext);
{
  /* <TodoContext.Provider />; */
} // 이런식으로 이용.. 위에 예시를 봐라.

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
      <TodoContext.Provider value={(todos, onCreate, onUpdate, onDelete)}>
        {" "}
        //그럼 이 태그 안에 있는 모든 요소들은 TodoContext로부터 데이터를 공급
        받을 수 있음. 데이터 공급하는건 다 배움. 이제 데이터를 꺼내서 쓰는
        방법을 살펴보자.
        <Editor onCreate={onCreate} />
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
