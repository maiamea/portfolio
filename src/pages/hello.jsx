import React from 'react';
import 'bulma/css/bulma.css';
import ExampleComponent from '../components/ExampleComponent';
import SiteListsComponent from '../components/SiteListsComponent';

const HelloPage = () => {
    return (
        <section className="section">

        <main className="container">
            <div className="content">
            <h1 className="title is-1">Hello, World!!!</h1>
            <p >サブタイトル</p>
            <p style={
                { color: "red" }
            }>こんにちは</p>
            <h2>はじめてのGatsby</h2>
            <ExampleComponent initialCount={50}></ExampleComponent>
            </div>
            {/* ExampleComponent({ initialCount: 100}) */}
            <h2 className="title is-2">サイト一覧</h2>
            <SiteListsComponent />
        </main>
            </section>
    )
}

export default HelloPage