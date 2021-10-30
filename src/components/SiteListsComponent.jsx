import React from 'react';

const lists = [
    {
        id: 1,
        name: 'Twitter',
        url: 'https://twitter.com/home'
    },
    {
        id: 2,
        name: 'note',
        url: 'https://note.com/maiamea'
    },
    {
        id: 3,
        name: 'Qiita',
        url: 'https://qiita.com/maiamea'
    },
    {
        id: 4,
        name: 'GitHub',
        url: 'https://github.com/maiamea'
    },
    {
        id: 5,
        name: 'Speaker Deck',
        url: 'https://speakerdeck.com/maiamea'
    },
];

const SiteListsComponent = () => (
    <ul>
        {lists.map((list) => (
            <li key={list.id}>
                <a href={list.url} target="_blank">{list.name}</a>
            </li>
        ))}
    </ul>
);

export default SiteListsComponent;