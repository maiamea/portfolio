import styled from 'styled-components';

export const Li = styled.li`
  border-left: 4px solid lightgray;
  margin-top: 12px;
  padding-left: 12px;
    &:hover {
      border-left: 4px solid orange;
    }
  line-height: 1.8;
`;

export const DateStyle = styled.span`
  font-size: small;
  color: gray;
`;

export const ListTitle = styled.div`
  line-height: 1.5;
`;

export const LinkStyle = styled.div`
  text-align: right;
  margin-top: 20px;
  & > a {
    color: gray;
    padding-bottom: 2px;
    border-bottom: 2px solid gray;
    &:hover {
        color: orange;
        border-bottom: 2px solid orange;
    }
  }
`;