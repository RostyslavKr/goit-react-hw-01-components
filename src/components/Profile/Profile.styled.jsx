import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  width: 300px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Description = styled.div`
  text-align: center;
  color: gray;
  margin-bottom: 30px;
`;

export const Avatar = styled.img`
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding-top: 5px;
  border: 1px solid gray;
  border-radius: 50%;
  width: 250px;
  height: 250px;
`;

export const Name = styled.p`
  color: black;
  font-weight: 700;
  font-size: large;
`;

export const Tag = styled.p`
  text-align: center;
  color: gray;
`;

export const Location = styled.p`
  text-align: center;
  color: gray;
`;

export const List = styled.ul`
  display: flex;
  border-top: 1px solid rgb(234, 238, 243);
  background-color: rgb(243, 246, 249);
`;

export const ItemList = styled.li`
  width: 100px;
  padding-top: 20px;
  padding-bottom: 20px;

  &:not(:last-child) {
    border-right: 1px solid rgb(225, 233, 243);
  }
`;

export const Label = styled.span`
  display: block;
  text-align: center;
  color: gray;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  display: block;
  text-align: center;
  font-weight: 500;
`;
