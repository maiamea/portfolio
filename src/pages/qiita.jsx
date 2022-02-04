import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import FooterComponent from '../components/FooterComponent';
import ArticlesComponent from '../components/ArticlesComponent';
import qiitaArticleLists from '../data/qiita.json';
const qiitaDescArticleLists = qiitaArticleLists.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

const QiitaPage = () => {
  return (
    <>
      <NavbarComponent />
      <section className="section" style={{minHeight: "calc(100vh - 168px - 52px)"}}>
        <main className="container">
          <ArticlesComponent size={100} title="Qiita" articleLists={qiitaDescArticleLists} />
        </main>
      </section>
      <FooterComponent />
    </>
  )
}

export default QiitaPage