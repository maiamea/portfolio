import React, { useState } from 'react';

const HelloPage = () => {
    return (
        <main>
            <h1>Hello, World!!!</h1>
            <p style={
                {color:"red"}
            }>こんにちは</p>
            <h2>はじめてのGatsby</h2>
            <ExampleComponent></ExampleComponent>
        </main>
    )
}

function ExampleComponent() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>
                Click me
            </button>
        </div>
    )
}

export default HelloPage