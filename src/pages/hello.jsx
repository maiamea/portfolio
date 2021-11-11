import React from 'react';
import 'bulma/css/bulma.css';
import ExampleComponent from '../components/ExampleComponent';
import SiteListsComponent from '../components/SiteListsComponent';
import { Timeline } from 'react-twitter-widgets';
import FooterComponent from '../components/FooterComponent';
import NotePage from './note';
import { Link } from "gatsby";

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
            <NotePage />
            <Link to="/note">and more...</Link>
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