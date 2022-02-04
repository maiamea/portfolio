import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import FooterComponent from '../components/FooterComponent';
import ArticlesComponent from '../components/ArticlesComponent';
import speakerDeckArticleLists from '../data/speaker_deck.json';
const speakerDeckDescArticleLists = speakerDeckArticleLists.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

const SpeakerDeckPage = () => {
  return (
    <>
      <NavbarComponent />
      <section className="section" style={{minHeight: "calc(100vh - 168px - 52px)"}}>
        <main className="container">
          <ArticlesComponent size={100} title="登壇資料" articleLists={speakerDeckDescArticleLists} />
        </main>
      </section>
      <FooterComponent />
    </>
  )
}

export default SpeakerDeckPage