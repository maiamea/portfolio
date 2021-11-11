import React from 'react';
import NoteArticlesComponent from '../components/NoteArticlesComponent';

const NotePage = () => {
  return (
    <section className="section">
      <main className="container">
        <h1 className="title is-1">note</h1>
        <NoteArticlesComponent />
      </main>
    </section>
  )
}

export default NotePage