import PropTypes from 'prop-types';

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

BlogCard.propTypes = {
  poster:PropTypes.string.isRequired,
  tag:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  postedAt:PropTypes.string.isRequired,
}
