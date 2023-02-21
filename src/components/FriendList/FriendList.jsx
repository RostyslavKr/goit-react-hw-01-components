
import css from '../FriendList/FriendList.module.css';

export default function FriendList(props) {
  const { friends } = props;
  console.log(friends);
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li key={id} className={css.item}>
          <span className={css[isOnline]}></span>
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}
