import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShowUserInfo from './componenets/UserInfo/ShowUserInfo';
import ChangeColor from "./componenets/ChangeColor/ChangeColor"

function App() {
  return (
    <div className="App" >     
      <ShowUserInfo />      
      <ChangeColor /> 
    </div>
  );
}

export default App;


