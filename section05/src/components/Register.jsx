import { useState, useRef } from "react";

//강당한 회원가입 폼
// 이름, 생년월일, 국적, 자기소개

const Register=() => {

  //비슷한 여러개의 state가 있을 때는 하나의 객체 값으로 묶어서 하나의 state로 통합해서 관리!
  const [input, setInput] = useState({
    name : "",
    birth : "",
    country : "",
    bio : "",
  });
  const countRef = useRef(0);
  const inputRef = useRef();

    //위에 const처럼 아래 4줄을 간단히 만들 수 있음.
  // const [name, setName] = useState("이름");
  // const [birth, setBirth] = useState("");
  // const [country, setCountry] = useState("");
  // const [bio, setBio] = useState("자기소개")

//비슷한 여러개의 event handler도 통합 event handler로 묶어줄 수 있다!
  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current); //1.ref객체 활용사례: 수정횟수check!하기
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if(input.name === ""){
      //2.ref객체 활용사례: 이름을 입력하는 DOM요소 포커스
      inputRef.current.focus();
    }
  }

    //아래의 4개의 event handler도 위에 한개로 줄일 수 있음.
  // const onChangeName = (e) => {
  //   setInput({
  //     ...input, //spread연산자 이걸 써야 나머지 생일,국적,자기소개의 property가 사라지지 않음.
  //     name : e.target.value
  //   });
  // };

  // const onChangeBirth = (e) => {
  //   setInput({
  //   ...input,
  //   birth : e.target.value
  //   });
  // };

  // const onChangeCountry = (e) => {
  //   setInput({
  //     ...input,
  //     country : e.target.value
  //     });
  // };

  // const onChangeBio = (e) => {
  //   setInput({
  //     ...input,
  //     bio : e.target.value
  //     });
  // };

  return (
    <div>
      <div>
        <input 
        ref={inputRef}
        name="name"
        value={input.name}
        onChange={onChange}
        placeholder={"이름"}
        />
      </div>

      <div>
        <input
        birth="birth"
        value={input.birth}
        onChange={onChange}
        type="date"
        />
      </div>

      <div>
        <select 
        name="country"
          value={input.country} 
          onChange={onChange}
        >
          <option vlaue=""></option>
          <option vlaue="kr">한국</option>
          <option value="uk">영국</option>
          <option value="us">미국</option>
        </select>
      </div>

      <div>
        <textarea 
          name="bio"
          value={input.bio}
          onChange={onChange}
        />
      </div>

      <button onClick={(onSubmit)}>제출</button>

    </div>
  );
};

export default Register;