import "./Main.css";

//JSX 주의 사항
//1. 중괄호 내부에는 자바스크립트 표현식(한 줄의 코드가 특정한 값으로 평가될 수 있는 식, 조건문이나 반복문은 쓸 수 없음)만 넣을 수 있다.
//2. 숫자, 문자열, 배열 값만 렌더링 된다. boolean, undefined, null값, obj 같은 건 렌더링 안됨.
//3. 모든 태그는 닫혀있어야 한다.
//4. 최상위 태그는 반드시 하나여야만 한다. <> 빈태그도 가능함

const Main = () => {
  const user = {
    name: "한수민",
    isLogin: true, //true면 로그아웃을, false면 로그인을 띄움.
  };

  //조건에 따라서 각각 다른 Ui를 컴포넌트가 렌더링하게 하는 방법
  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }

  
  //삼항 연산자를 사용하는 방법
  // return (
  //   <>
  //     {user.isLogin ? (
  //       <div>로그아웃</div>
  //     ) : (
  //       <div>로그인</div>
  //     )}
  //   </>
  // );
};

export default Main;






// const Main = () => {
//   const number = 9;


//   return(
//     <main>
//       <h1>main</h1>
//       <h2>{number +10}</h2>  //jsx문법 내에서 javascript의 값을 html로 렌더링하고 싶으면 '중괄호{}'를 사용하면 됨.
//       <h3>{number % 2 === 0 ? "짝수" : "홀수"}</h3>
//     </main>
//   );
// };

// export default Main;