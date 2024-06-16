import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoContext);
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
      <div className="date">
        {new Date(date).toLocaleDateString()}
      </div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

//고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
  //함수의 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
  //T = Props가 바뀌지 않음 -> 리렌더링 x
  //T = Props가 바뀜 -> 리렌더링 o

//   if(prevProps.id !== nextProps.id) return false;
//   if(prevProps.isDone !== nextProps.isDone) return false;
//   if(prevProps.content !== nextProps.content) return false;
//   if(prevProps.date !== nextProps.date) return false;

//   return true;
// });
//props가 같은 값인지 다른 값인지를 판단해서 이 TodoItem컴포넌트를 리렌더링 할지 말지를 결정.

export default memo(TodoItem);