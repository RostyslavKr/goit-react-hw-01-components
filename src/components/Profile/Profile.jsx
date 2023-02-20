export default function Profile(props) {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views: userViews, likes: userLikes },
  } = props;
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" width="500" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{userViews}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{userLikes}</span>
        </li>
      </ul>
    </div>
  );
}
