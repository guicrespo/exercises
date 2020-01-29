import React from 'react';
import logo from './logo.svg';
import './App.css';

// const taskArray = ['levar cachorro para passear', 'fazer comida', 'limpar a casa', 'dormir'];
// const taskArrayMap = taskArray.map(element => <li>{element}</li>);
// function createList() {
//   return (
//   <ol>
//     {taskArrayMap}
//   </ol>
//   );
// }

// refatorada:
// const taskArray = ['levar cachorro para passear', 'fazer comida', 'limpar a casa', 'dormir'];
// function createList() {
//   return (
//   <ol>
//     { taskArray.map(element => <li>{element}</li>) }
//   </ol>
//   );
// }

// refatorada com arrow function:
const taskArray = ['levar cachorro para passear', 'fazer comida', 'limpar a casa', 'dormir'];
const createList = () => ( <ol>{ taskArray.map(item => <li>{item}</li>) }</ol> );

export default createList;
