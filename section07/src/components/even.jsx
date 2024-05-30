import { useEffect } from "react";


const Even = () => {
  useEffect (() => {
    //useEffect의 callback함수가 반환하는 함수 : 클린업, 정리함수 : useEffect가 끝날 때 실행이 됨.
    return () => {
      console.log("unmount");
    };
  }, []); //deps가 빈배열이면 useEffect는 mount될 때 실행이 됨. 종료는 unmount될 때 종료됨. 그래서 unmount되면 위의 정리함수 (여기서는 return문)이 호출이 됨.
  return <div>짝수입니다</div>
};

export default Even;