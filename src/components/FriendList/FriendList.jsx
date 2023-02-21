import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';
import FriendListItem from './FriendListItem';

export default function FriendList(props) {
  const { friends } = props;

  return (
    <ul className={css.friendList}>
      {friends.map(item => (
        <FriendListItem
          key={item.id}
          isOnline={item.isOnline}
          avatar={item.avatar}
          name={item.name}
        />
      ))}
    </ul>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number,
};
