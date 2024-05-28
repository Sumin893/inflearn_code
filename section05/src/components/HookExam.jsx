import useInput from "./../hooks/useinput";

// 3가지 Hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다 = > 서로다른 hook들의 순서가 엉망이 되어버리는 수가 있음.
// 3. 나만의 훅 (Custom Hook)을 직접 만들 수 있다.

//const state = useState(); //이렇게 외부에서 호출 불가능


const HookExam = () => {
  const [input, onChange] =  useInput();
  const [input2, onChange2] =  useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );

  // if(true) {
  //   const state = useState;
  // }

  // for(;;){
  //   //
  // }

  const state = useState();

  return <div>hookexam</div>;
};

export default HookExam;