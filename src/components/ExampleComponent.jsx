import React, { useEffect, useState } from 'react';
function ExampleComponent({ initialCount }) {
  // console.log({props});
  // const initialCount = props.initialCount;
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p className="box">You clicked {count} times</p>
      <button className="button is-primary" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button className="button is-info" onClick={() => setCount(currentCount => currentCount - 1)}>
        -
      </button>
      <button className="button is-danger is-outlined" onClick={() => setCount(initialCount)}>
        Reset
      </button>
    </div>
  )
}

export default ExampleComponent;