import './App.css'
import { useState, useRef, useReducer,useCallback, createContext } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';


const mockData= [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "노래방가기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "과제하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId
          ? { ...item, isDone: !item.isDone }
          : item
      );
    case "DELETE":
      return state.filter(
        (item) => item.id !== action.targetId
      );
    default:
      return state;
  }
}

export const TodoContext = createContext();
//context의 생성은 특별한 경우가 아니면 컴퍼넌트 외부에 생성한다. (아래app함수에 넣지 말라@)

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3)

  //새롭게 생성될 todo 아이템을 객체형태로 만들기
  const onCreate = useCallback((content) => {
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

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoContext.Provider 
        value={{
          todos,
          onCreate,
          onUpdate,
          onDelete,
        }}
      >
        <Editor />
        <List />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
