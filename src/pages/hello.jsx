import React from 'react';
import 'bulma/css/bulma.css';
import ExampleComponent from '../components/ExampleComponent';
import SiteListsComponent from '../components/SiteListsComponent';
import { Timeline } from 'react-twitter-widgets';
import FooterComponent from '../components/FooterComponent';
import ArticlesComponent from '../components/ArticlesComponent';
import noteArticleLists from '../data/note.json';
// 文字列の日付をDate型に変換してsortに使用
const noteDescArticleLists = noteArticleLists.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

const HelloPage = () => {
  return (
    <section className="section">
      <main className="container">
        <h1 className="title is-1">めあ's Portfolio</h1>
        <SiteListsComponent />
        <div className="columns">
          <div className="column">
            <div className="content">
              <h2>はじめてのGatsby</h2>
              <ExampleComponent initialCount={50}></ExampleComponent>
            </div>
            {/* ExampleComponent({ initialCount: 100}) */}
            <ArticlesComponent size={3} title="note" articleLists={noteDescArticleLists} linkUrl={"/note"}/>
          </div>
          <div className="column is-one-third">
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'maiamea'
              }}
              options={{
                height: '800'
              }}
            />
          </div>
        </div>
        <FooterComponent />
      </main>
    </section>
  )
}

export default HelloPage