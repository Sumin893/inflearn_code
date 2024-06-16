import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
  <div className="Header">
    <h3>오늘은 🗓️</h3>
    <h1>{new Date().toDateString()}</h1>
  </div>
  );
};

const memoizedHeader = memo(Header);
export default memoizedHeader;

// 위에 두줄과 같은 코드
// export default memo(Header);