import React from 'react';
import 'antd/dist/antd.css';
import './App.scss';
import UserList from './Components/UserList/UserList';
import Logo from './Assets/logo.png';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <img src={Logo} alt="logo" />
      </header>
      <UserList />
    </div>
  );
}

export default App;
