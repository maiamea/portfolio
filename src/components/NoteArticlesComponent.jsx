import React from 'react';
import {Li, DateStyle, ListTitle} from './ListStyleComponent';
import articleLists from '../data/note.json';

// 文字列の日付をDate型に変換してsortに使用
const DescArticleLists = articleLists.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

const NoteArticlesComponent = () => (
  <>
    {DescArticleLists.map((list) => (
      <ul>
        <Li key={list.id}>
          <a href={list.url}>
            <DateStyle>{list.date}</DateStyle>
            <br />
            <ListTitle>{list.title}</ListTitle>
          </a>
        </Li>
      </ul>
    ))}
  </>
);

export default NoteArticlesComponent