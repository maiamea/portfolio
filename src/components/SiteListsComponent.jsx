import React from 'react';
import TwitterIcon from '../images/twitter.png';
import NoteIcon from '../images/note.png';
import QiitaIcon from '../images/qiita.png';
import GitHubIcon from '../images/github.png';
import SpeakerDeckIcon from '../images/speakerdeck.png';

const lists = [
  {
    id: 1,
    name: 'Twitter',
    url: 'https://twitter.com/home',
    image: {
      src: TwitterIcon,
      alt: 'Twitter'
    }
  },
  {
    id: 2,
    name: 'note',
    url: 'https://note.com/maiamea',
    image: {
      src: NoteIcon,
      alt: 'Note'
    }
  },
  {
    id: 3,
    name: 'Qiita',
    url: 'https://qiita.com/maiamea',
    image: {
      src: QiitaIcon,
      alt: 'Qiita'
    }
  },
  {
    id: 4,
    name: 'GitHub',
    url: 'https://github.com/maiamea',
    image: {
      src: GitHubIcon,
      alt: 'GitHub'
    }
  },
  {
    id: 5,
    name: 'Speaker Deck',
    url: 'https://speakerdeck.com/maiamea',
    image: {
      src: SpeakerDeckIcon,
      alt: 'SpeakerDeck'
    }
  },
];

const SiteListsComponent = () => (
  <div style={{display:"flex"}}>
    {lists.map((list) => (
        <div key={list.id} style={{flexBasis:"35px"}}>
          <a href={list.url} target="_blank">
          <img src={ list.image.src } alt={list.image.alt} width={24} height={24} />
          </a>
        </div>
    ))}
  </div>
);

export default SiteListsComponent;