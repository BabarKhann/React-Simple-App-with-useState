import React, { useState } from 'react';
import Tweet from './Tweet';

function App() {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Hiii');

  const [users, setusers] = useState([
    { name: 'John', message: 'im john snow', likes: 55 },
    { name: 'Brad', message: 'im Brad Pitt', likes: 55 },
    { name: 'Keanu', message: 'im Keanu Reeves', likes: 55 },
  ])

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  }

  const changeName = () => {
    setName("i'm changed");
  }

  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} likes={user.likes} />
      ))}
      <br />
      <hr />
      <button onClick={increment}>Increment</button>
      <h2 className={isRed ? 'red' : ''}>{count}</h2>
      <h2>{name}</h2>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default App;