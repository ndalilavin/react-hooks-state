import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // function increment() {
  //   setCount(count + 1);
  // }

  // return <button onClick={increment}>I have been clicked {count} times</button>;


  // function increment() {
  //   console.log(`before setState: ${count}`);

  //   setCount(count + 1);

  //   console.log(`after setState: ${count}`);
  // }

  // return <div onClick={increment}>{count}</div>;

  //function increment() {
    // call setCount twice, to update the counter by two every time we click
    //setCount(count + 2); // increments by 2
    //setCount(count + 1);
  //}

  //return <div onClick={increment}>{count}</div>;

  // using the callback function, the setCount increases by 2

function increment() {
  setCount((currentCount) => currentCount + 1);
  setCount((currentCount) => currentCount + 1);
}

return <div onClick={increment}>{count}</div>;

}

export default Counter;
