import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import ArticlesComponent from '../components/ArticlesComponent';
import qiitaArticleLists from '../data/qiita.json';
const qiitaDescArticleLists = qiitaArticleLists.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

const QiitaPage = () => {
  return (
    <section className="section">
      <NavbarComponent />
      <main className="container">
        <ArticlesComponent size={100} title="Qiita" articleLists={qiitaDescArticleLists} />
      </main>
    </section>
  )
}

export default QiitaPage