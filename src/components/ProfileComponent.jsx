import React from 'react';
import TwitterMaiameaIcon from '../images/twitter_maiamea.png';

const ProfileComponent = () => (
  <>
    <section className="hero is-info is-halfheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 has-text-centered mb-6">プロフィール</h1>
          <div className="columns is-flex-direction-column is-align-items-center">
                <div className="column has-text-centered">
                  <figure className="image is-128x128 is-inline-block">
                    <img className="is-rounded is-inline-block" src={TwitterMaiameaIcon}></img>
                  </figure>
                </div>
                <div className="column is-three-fifths has-text-left">
                  <p className="subtitle">沖縄県出身のWebエンジニアを目指すヒト。薬剤師をしていたが、体調を崩したのをきっかけに自分の適性を考え直す。テクノロジア魔法学校でプログラミングの楽しさを知り、現在は主にJavaScriptを学習中。noteや寄稿などのアウトプットも積極的に行っている。</p>
                </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ProfileComponent