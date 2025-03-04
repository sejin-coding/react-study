// React.memo 와 컴포넌트 렌더링 최적화
// : 컴포넌트를 인수로 받아, 최적화된 컴포넌트로 만들어 변환
// ex) MemoizedComponent = memo(Component)
// 반환값:최적화된 컴포넌트 <= 인수:컴포넌트
// Parent(부모)가 리렌더링 되더라도 자신의 Props가 바뀌지 않으면 리렌더링 되지 않도록. Memoized Component로 memo로 최적화해서 불피요한 렌더링 방지

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

// export default memoizedHeader;
// 또는 단축해서 export default memo(Header);

// 이런식으로 리렌더링 되지 않도록

import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// export default memo(TodoItem); // 현재 props와 과거 props를 비교해서 리렌더링을 할지 말지 고민함.
// 근데 얕은 비교를 하기 때문에 객체 타입 onDelete, onUpdate 같은 것들은  무조건 다른 주소값으로 인식하는것.
// 그래서 객체타입의 이런 props 값은 아쉽게도 memo만 적용하게 된다고해서 리렌더링이 발생하게 됨. 최적화가 되지 않게됨.

// !!! 고차 컴포넌트(HOC) !!!
export default memo(TodoItem, (prevProps, nextProps) => {
  // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
  // T -> Props 바뀌지 않음 -> 리렌더링 X
  // F -> Props 바뀜 -> 리렌더링 O

  if (prevProps.id != nextProps.id) return false;
  if (prevProps.isDone != nextProps.isDone) return false;
  if (prevProps.content != nextProps.content) return false;
  if (prevProps.date != nextProps.date) return false;

  return true;
});
