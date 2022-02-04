import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import FooterComponent from '../components/FooterComponent';
import ArticlesComponent from '../components/ArticlesComponent';
import contributionArticleLists from '../data/contribution.json';
const contributionDescArticleLists = contributionArticleLists.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

const ContributionPage = () => {
  return (
    <>
      <NavbarComponent />
      <section className="section" style={{minHeight: "calc(100vh - 168px - 52px)"}}>
        <main className="container">
          <ArticlesComponent size={100} title="寄稿" articleLists={contributionDescArticleLists} />
        </main>
      </section>
      <FooterComponent />
    </>
  )
}

export default ContributionPage