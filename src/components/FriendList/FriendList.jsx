import PropTypes from 'prop-types';
import { List } from './FriendList.Styled';
import FriendListItem from './FriendListItem';

export default function FriendList(props) {
  const { friends } = props;

  return (
    <List>
      {friends.map(item => (
        <FriendListItem
          key={item.id}
          isOnline={item.isOnline}
          avatar={item.avatar}
          name={item.name}
        />
      ))}
    </List>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number,
};
