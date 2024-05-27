import { useState } from "react";

//강당한 회원가입 폼
// 이름, 생년월일, 국적, 자기소개

const Register=() => {

  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("자기소개")


  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  }

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  }

  const onChangeBio = (e) => {
    setBio(e.target.value);
  }

  return (
    <div>
      <div>
        <input 
        value={name}
        onChange={onChangeName}
        placeholder={"이름"}
        />
      </div>

      <div>
        <input
        value={birth}
        onChange={onChangeBirth}
        type="date"
        />
      </div>

      <div>
        <select value={country} onChange={onChangeCountry}>
          <option vlaue=""></option>
          <option vlaue="kr">한국</option>
          <option value="uk">영국</option>
          <option value="us">미국</option>
        </select>
      </div>

      <div>
        <textarea value={bio} onchange={onChangeBio}/>
      </div>

    </div>
  );
};

export default Register;