// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import React, { useEffect, useState } from 'react';

function useLocalStorageState(key, defaultValue = '') {
  const [state, setState] = useState(() => window.localStorage.getItem(key) || defaultValue);

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}

function Greeting() {
  // {initialName = ''} // parâmetro da função
  // 🐨 initialize the state to the value from localStorage
  // const nameFromLS = window.localStorage.getItem('name') || initialName;
  // const [name, setName] = React.useState(() => nameFromLS);
  const [name, setName] = useLocalStorageState('name');
  // useEffect(() => {
  //   window.localStorage.setItem('name', name);
  // }, [name]);
  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
