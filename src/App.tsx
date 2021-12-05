import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createLogicalNot } from 'typescript';

let username: string  = "hello";
let dummyNum: number = 2;
let bool: boolean = true;

let array = [true, false, true];
let array2 = [0, 1, "hello"];

interface NAME {
  first: string;
  last: string | null;
}

type PROFILE = {
  age: number;
  city: string;
}

type LOGIN = {
  username: string;
  password: string;
}

//intersection types
type USER = PROFILE & LOGIN;

const  userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
}

let nameObj: NAME = { first: "Yamada" , last: "Taro"};

const fun01 = (x: number, y: number): number => {
 return x + y;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
