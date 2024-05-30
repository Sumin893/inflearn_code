import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/even';
import { useState, useEffect, useRef } from 'react';


// useEffect 모양
//   useEffect (()=> {}, []);


function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false); //false의 의미 : 아직 이 component는 mount되지 않았다.

//라이프 사이클
//1. 마운트 : 탄생
  useEffect (()=> {
    console.log("mount");
  }, []);
//component가 mount되었을 때만 딱 최초로 한 번 실행시키고 싶은 코드가 있다면 useEffect를 호출하고 deps로는 빈 배열을 전달하면 됨.

//2. 업데이트 : 변화, 리렌더링
  useEffect (() => {
    if(!isMount.current) {
      isMount.current = true;
      return;
//component의 update단계에서만 "update"를 출력시키고 싶으면 레퍼런스 객체인 isMount와 if문,  useRef를 사용하기.

    }
    console.log("update");
  });
//update는 deps를 생략하고 callback함수만 쓰면 됨. callback함수가 mount될 때 한번 실행 되고, 이 component가 리렌더링 될 때마다, 즉 업데이트가 일어날 때마다 계속 실행이 됨.

//3. 언마운트 : 죽음


  // useEffect( () => {

  //   console.log(`count: ${count} / input: ${input}`);
  // }, [count, input]);
//useEffect가 콜백함수와 배열을 입력받는데, 배열이 어떻게 되느냐에 따라 콜백함수가 호출되는 거라 이 배열을 dependency array (=의존성 배열) 이라고 부름 줄여서 deps. deps에는 여러 개를 넣을 수 있음 count만 넣어도 되고 count랑 input 둘 다 넣어도 됨.
//원하는 값이 (여기서는 count랑 input) 바뀌었을 때만 특정 동작을 callback함수로 실행하도록 만들어 줄 수 있게 된 것.

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
    <h1>Simple Counter</h1>
    <section>
      <input value={input} onChange={(e) => {
        setInput(e.target.value)
      }} />
    </section>
    <section>
      <Viewer count={count} />
      {count % 2 === 0 ? <Even /> : null}
    </section>
    <section>
      <Controller onClickButton = {onClickButton} />
    </section>
    </div>
  );
}

export default App
