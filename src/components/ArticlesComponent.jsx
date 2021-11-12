import React from 'react';
import { Li, DateStyle, ListTitle, LinkStyle } from './ListStyleComponent';
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
      linkUrl ? <LinkStyle><Link to={linkUrl}>and more...</Link></LinkStyle> : null
    }
  </>
);

export default ArticlesComponent