import React, { useState } from 'react';
// import TodoCompo from './component/Todocompo';
// import Login from './component/Login';
import Demo from './component/demoNextUI';
import './App.css';
import Data from 'mockData';

export default function App() {
  // const [isLogin, setIsLogin] = useState(false);
  // const onclickHandler = () => {
  //   setIsLogin(!isLogin)
  // }

  return [
    <div>
      {/* {isLogin === true ? <TodoCompo /> : <Login />} */}
      {/* <button onClick={onclickHandler}>
        {isLogin === true ? "logout" : "login"}
      </button> */}
      <Demo />
    </div>
  ];
}

