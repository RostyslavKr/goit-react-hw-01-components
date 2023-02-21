import css from '../FriendList/FriendList.module.css';

export default function FriendListItem({ avatar, name, id, isOnline }) {
  return (
    <li key={id} className={css.item}>
      <span className={css[isOnline]}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
