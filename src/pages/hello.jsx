import React from 'react';
import ExampleComponent from '../components/ExampleComponent';
import SiteListsComponent from '../components/SiteListsComponent';

const HelloPage = () => {
    return (
        <main>
            <h1>Hello, World!!!</h1>
            <p style={
                { color: "red" }
            }>こんにちは</p>
            <h2>はじめてのGatsby</h2>
            <ExampleComponent initialCount={50}></ExampleComponent>
            {/* ExampleComponent({ initialCount: 100}) */}
            <h2>サイト一覧</h2>
            <SiteListsComponent />
        </main>
    )
}

export default HelloPage