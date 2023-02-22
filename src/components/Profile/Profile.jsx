import {
  Container,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  List,
  ItemList,
  Label,
  Quantity,
} from './Profile.styled';
export default function Profile(props) {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views: userViews, likes: userLikes },
  } = props;
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <List>
        <ItemList>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </ItemList>
        <ItemList>
          <Label>Views</Label>
          <Quantity>{userViews}</Quantity>
        </ItemList>
        <ItemList>
          <Label>Likes</Label>
          <Quantity>{userLikes}</Quantity>
        </ItemList>
      </List>
    </Container>
  );
}
