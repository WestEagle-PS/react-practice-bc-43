export const BlogCard = ({
  poster,
  tag,
  title,
  description,
  name,
  avatar,
  postedAt,
}) => {
  return (
    <div>
      <img src={poster} alt={tag} />
      <span>{tag}</span>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <img src={avatar} alt="" />
        <p>{name}</p>
        <p>{postedAt}</p>
      </div>
    </div>
  );
};
