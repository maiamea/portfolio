import React, { useEffect, useState } from 'react';
function ExampleComponent({initialCount}) {
    // console.log({props});
    // const initialCount = props.initialCount;
    const [count, setCount] = useState(initialCount);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>
                Click me
            </button>
            <button onClick={() => setCount(currentCount => currentCount - 1)}>
                -
            </button>
            <button onClick={() => setCount(initialCount)}>
                Reset
            </button>
        </div>
    )
}

export default ExampleComponent;