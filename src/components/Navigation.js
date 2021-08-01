import React from "react";
//아래걸 통해서 링크 이동을 할 수 있고 이걸 써야 새로고침(react 다시시작)을 하지 않음.
//<a href="/">Home</a>  <-- 옆에 걸 사용하면 아예 새로고침(react 다시시작)해버림.
import {Link} from "react-router-dom"; 


function Navigation(){
  return (<div>
    <Link to="/">Home</Link>  {/* Home을 클릭하면 / 이 포함된 url로 이동 */}  
    <Link to="/about">About</Link> 
  </div>
  );
}

export default Navigation;