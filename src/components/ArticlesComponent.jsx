import React from 'react';
import { Li, DateStyle, ListTitle } from './ListStyleComponent';
import { Link } from "gatsby";

const ArticlesComponent = ({title, size, articleLists, linkUrl}) => (
  <>
    <h1 className="title is-1">{title}</h1>
    {articleLists.slice(0, size).map((list) => (
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
    {
      linkUrl ? <Link to={linkUrl}>and more...</Link> : null
    }
  </>
);

export default ArticlesComponent