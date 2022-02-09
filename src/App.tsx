import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { MenuList } from './components/MenuList';
import { SideBar } from './components/SideBar';

function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <MenuList></MenuList>
      <SideBar></SideBar>

    </div>
  );
}

export default App;
