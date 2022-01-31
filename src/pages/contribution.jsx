import React from 'react';
import ArticlesComponent from '../components/ArticlesComponent';
import contributionArticleLists from '../data/contribution.json';
const contributionDescArticleLists = contributionArticleLists.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

const ContributionPage = () => {
  return (
    <section className="section">
      <main className="container">
      <ArticlesComponent size={100} title="寄稿" articleLists={contributionDescArticleLists}/>
      </main>
    </section>
  )
}

export default ContributionPage