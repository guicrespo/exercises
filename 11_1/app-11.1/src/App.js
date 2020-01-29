import React from 'react';
import logo from './logo.svg';
import './App.css';

const taskArray = ['levar cachorro para passear', 'fazer comida', 'limpar a casa', 'dormir'];
const taskArrayMap = taskArray.map(element => <li>{element}</li>);
function createList() {
  return (
  <ol>
    {taskArrayMap}
  </ol>
  );
}

export default createList;
