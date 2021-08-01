import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App(){
  return <HashRouter>
    <Navigation />  {/*Router 밖에서는 Link를 사용할 수 없다.*/}
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} /> 
    <Route path="/movie/:id" component={Detail} /> 
  </HashRouter>;   
}

export default App;

//router은 url을 가져다가 확인하고 뭘 명령했느냐에 따라 component를 불러온다.

