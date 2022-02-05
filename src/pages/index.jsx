import React from 'react';
import 'bulma/css/bulma.css';
import SiteListsComponent from '../components/SiteListsComponent';
import FooterComponent from '../components/FooterComponent';
import ArticlesComponent from '../components/ArticlesComponent';
import noteArticleLists from '../data/note.json';
import qiitaArticleLists from '../data/qiita.json';
import contributionArticleLists from '../data/contribution.json';
import speakerDeckArticleLists from '../data/speaker_deck.json';
import NavbarComponent from '../components/NavbarComponent';
import ProfileComponent from '../components/ProfileComponent';
import TwitterTimelineComponent from '../components/TwitterTimelineComponent';
// 文字列の日付をDate型に変換してsortに使用
const noteDescArticleLists = noteArticleLists.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
const qiitaDescArticleLists = qiitaArticleLists.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
const contributionDescArticleLists = contributionArticleLists.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
const speakerDeckDescArticleLists = speakerDeckArticleLists.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

const IndexPage = () => {
  return (
    <>
      <NavbarComponent />
      <section className="section">
        <main className="container">
          <h1 className="title is-1">めあ's Portfolio</h1>
          <SiteListsComponent />
          <div className="columns">
            <div className="column">
              <ArticlesComponent size={3} title="note" articleLists={noteDescArticleLists} linkUrl={"/note"} />
              <ArticlesComponent size={3} title="Qiita" articleLists={qiitaDescArticleLists} linkUrl={"/qiita"} />
              <ArticlesComponent size={3} title="寄稿" articleLists={contributionDescArticleLists} linkUrl={"/contribution"} />
              <ArticlesComponent size={3} title="登壇資料" articleLists={speakerDeckDescArticleLists} linkUrl={"/speaker_deck"} />
            </div>
            <div className="column is-one-third is-hidden-mobile">
              <TwitterTimelineComponent />
            </div>
          </div>
        </main>
      </section>
      <ProfileComponent />
      <section className="section is-hidden-tablet">
        <TwitterTimelineComponent />
      </section>
      <FooterComponent />
    </>
  )
}

export default IndexPage