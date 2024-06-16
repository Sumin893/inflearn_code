//10-1최적화 : 웹 서비스의 성능을 개선하는 모든 행위. 아주 단순한 것부터 아주 어려운 방법까지 매우 다양함.
//ex) 서버의 응답속도 개선. 이미지, 폰트, 코드 파일 등의 정젖 파일 로딩 개선. 불필요한 네트워크 요청 줄임 등.
//react app내부의 최적화 방법: 컴포넌트 내부의 불 필요한 연산 방지, 불필요한 함수 재생성 방지, 불필요한 리렌더링 방지 등

//useMemo - 불필요한 연산 방지 "메모이제이션" 기법을 기반으로 불필요한 연산을 최적화 하는 리액트 훅

import "./List.css";
import TodoItem from "./TodoItem";
import { useState,useMemo,useContext } from "react";
import { TodoContext } from "../App";

const List = () => {
  const {todos} = useContext(TodoContext);

  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  //이 getAnalyzedData가 특정조건이 만족했을 때에만 결과 값을 다시 계산하도록. 연산 자체만 메모이제이션 하게. 이 getAnalyzedData는 아래 useMemo로 들어감.
  // const getAnalyzedData = () => {
  //   console.log("getAnalyzedData 호출!");
  //   const totalCount = todos.length; //초기화
  //   const doneCount = todos.filter(
  //     (todo) => todo.isDone
  //   ).length; //투두들 중에 완료된 투두의 개수 저장
  //   const notDoneCount = totalCount - doneCount; //완료되지 않은 투두의 저장

  //   return {
  //     totalCount,
  //     doneCount,
  //     notDoneCount
  //   };
  // };

  const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
    console.log("getAnalyzedData 호출!");
    const totalCount = todos.length; //초기화
    const doneCount = todos.filter(
      (todo) => todo.isDone
    ).length; //투두들 중에 완료된 투두의 개수 저장
    const notDoneCount = totalCount - doneCount; //완료되지 않은 투두의 저장

    return {
      totalCount,
      doneCount,
      notDoneCount
    };
  }, [todos]);
  //의존성 배열: deps *useEffect때 deps에 들어가는 값이 바뀌면 콜백 함수를 다시 실행하는 훅 = useEffect
  //useMemo도 deps에 포함된 값이 변경되었을 때만 첫 번째 인수로 전달한 콜백함수를 다시 실행하게 됨.
  //useMemo의 callback함수 안에는 memoization하고 싶은 연산을 넣어주면 됨.

  // const { totalCount, doneCount, notDoneCount } =
  //   getAnalyzedData();

  return (
    <div className="List">
      <h4>Todo List 🍎</h4>

    <div>
      <div>total: {totalCount}</div>
      <div>done: {doneCount}</div>
      <div>notDone: {notDoneCount}</div>
    </div>

      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id} 
              {...todo}
              />
              );
          })}
        </div>
      </div>
  );
};

export default List;