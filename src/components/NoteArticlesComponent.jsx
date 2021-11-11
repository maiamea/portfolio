import React from 'react';


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

// px-2 mt-4 leading-tight border-l-4 border-gray-200 group dark:border-gray-400 hover:border-green-500
const listStyle = {
  borderLeft: "4px solid red",
  "&:hover":{
    borderLeft: "4px solid green"
  },
  marginTop: "4px"
}
const NoteArticlesComponent = () => (
  <>
    {articleLists.map((list) => (
      <ul>
        <li style={listStyle} key={list.id}>
          <a href={list.url}>
            <span className="text-xs text-gray-400">{list.date}</span>
            <br />
            {list.title}
          </a>
        </li>
      </ul>
    ))}
  </>
);

export default NoteArticlesComponent