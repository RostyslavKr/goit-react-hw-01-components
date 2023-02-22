import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  width: 400px;
`;

export const ItemFriend = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  margin-bottom: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
export const AvatarImg = styled.img`
  margin-left: 5px;
  margin-right: 15px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: larger;
`;

export const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;
