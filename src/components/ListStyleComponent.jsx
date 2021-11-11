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