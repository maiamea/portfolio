import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import ArticlesComponent from '../components/ArticlesComponent';
import noteArticleLists from '../data/note.json';
const noteDescArticleLists = noteArticleLists.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

const NotePage = () => {
  return (
    <>
      <NavbarComponent />
      <section className="section">
        <main className="container">
          <ArticlesComponent size={100} title="note" articleLists={noteDescArticleLists} />
        </main>
      </section>
    </>
  )
}

export default NotePage