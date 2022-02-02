import React from 'react';
import ArticlesComponent from '../components/ArticlesComponent';
import noteArticleLists from '../data/note.json';
const noteDescArticleLists = noteArticleLists.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

const NotePage = () => {
  return (
    <section className="section">
      <nav class="navbar is-transparent is-info">
        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item" href="/hello">トップ</a>
            <a class="navbar-item" href="">プロフィール</a>
            <a class="navbar-item" href="">スキル</a>
            <a class="navbar-item" href="">連絡先</a>
          </div>
        </div>
      </nav>
      <main className="container">
        <ArticlesComponent size={100} title="note" articleLists={noteDescArticleLists} />
      </main>
    </section>
  )
}

export default NotePage