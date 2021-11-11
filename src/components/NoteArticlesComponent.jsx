import React from 'react';
import {Li, DateStyle, ListTitle} from './ListStyleComponent';

const articleLists = [
  {
    id: 1,
    date: "2021/10/29",
    title: "【参加メモ】 『SCRUM BOOT CAMP THE BOOK 増補改訂版』読書会 第3回目",
    url: "https://note.com/maiamea/n/n21e44fdb4f10"
  },
  {
    id: 2,
    date: "2021/10/27",
    title: "【参加メモ】 『SCRUM BOOT CAMP THE BOOK 増補改訂版』読書会 第2回目",
    url: "https://note.com/maiamea/n/n792779910e0b"
  },
  {
    id: 3,
    date: "2021/10/25",
    title: "【参加メモ】 『SCRUM BOOT CAMP THE BOOK 増補改訂版』読書会 第1回目",
    url: "https://note.com/maiamea/n/n5cd7a8c0cbf7"
  },
  {
    id: 4,
    date: "2021/10/01",
    title: "はじめてカンファレンスのセッション公募に応募したよ！",
    url: "https://note.com/maiamea/n/n165d9f8199fa"
  },
];

const NoteArticlesComponent = () => (
  <>
    {articleLists.map((list) => (
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