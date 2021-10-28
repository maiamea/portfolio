import React from 'react';
import ExampleComponent from '../components/ExampleComponent';

const HelloPage = () => {
    return (
        <main>
            <h1>Hello, World!!!</h1>
            <p style={
                {color:"red"}
            }>こんにちは</p>
            <h2>はじめてのGatsby</h2>
            <ExampleComponent initialCount={50}></ExampleComponent>
            {/* ExampleComponent({ initialCount: 100}) */}
        </main>
    )
}

export default HelloPage