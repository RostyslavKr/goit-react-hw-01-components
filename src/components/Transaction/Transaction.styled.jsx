import styled from '@emotion/styled';

export const Transaction = styled.table`
  margin-right: auto;
  margin-left: auto;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TableHead = styled.tr`
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  background-color: #066673;
`;

export const TableItem = styled.tr`
  text-align: center;

  &:nth-child(2n) {
    background-color: #9fdbf2;
  }
  &:hover {
    background-color: tomato;
    color: white;
  }
`;

export const TableHeadIcon = styled.th`
  padding: 20px 50px;
  outline: 1px solid #2a2a2a;
`;

export const TableDataIcon = styled.td`
  padding: 20px 50px;
  outline: 1px solid #2a2a2a;
`;
