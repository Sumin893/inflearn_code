import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useState, useEffect } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect( () => {

    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]);
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
    </section>
    <section>
      <Controller onClickButton = {onClickButton} />
    </section>
    </div>
  );
}

export default App
