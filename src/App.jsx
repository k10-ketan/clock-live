import React, { useState } from 'react';

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [cTime, setCTime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCTime(time);
  }
  setInterval(updateTime, 1000);

  return (
    <>
      <h1>{cTime}</h1>
    </>
  );
};

export default App;