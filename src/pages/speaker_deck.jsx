import React from 'react';
import ArticlesComponent from '../components/ArticlesComponent';
import speakerDeckArticleLists from '../data/speaker_deck.json';
const speakerDeckDescArticleLists = speakerDeckArticleLists.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

const SpeakerDeckPage = () => {
  return (
    <section className="section">
      <main className="container">
      <ArticlesComponent size={100} title="登壇資料" articleLists={speakerDeckDescArticleLists}/>
      </main>
    </section>
  )
}

export default SpeakerDeckPage