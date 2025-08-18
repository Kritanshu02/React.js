import { useState } from 'react';

 function Props() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count1={count} onClick={handleClick} />
      <MyButton count1={count} onClick={handleClick} />
    </div>
  );
  function MyButton({ count1, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count1} times
    </button>
  );
}
}
  export default Props