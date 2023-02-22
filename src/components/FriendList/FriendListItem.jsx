import { ItemFriend, AvatarImg, Name, Status } from './FriendList.Styled';

export default function FriendListItem({ avatar, name, id, isOnline }) {
  return (
    <ItemFriend key={id}>
      <Status isOnline={isOnline}></Status>
      <AvatarImg src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </ItemFriend>
  );
}
