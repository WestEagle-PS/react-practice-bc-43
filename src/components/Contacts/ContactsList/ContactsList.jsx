import { GrFavorite } from 'react-icons/gr';

export const ContactList = ({ list = [], remove }) => {
  const elements = list.map(item => (
    <li key={item.id}>
      {item.favorite && <GrFavorite />}
      <p>Name:{item.name}</p>
      <p>Number:{item.number}</p>
      <button onClick={() => remove(item.id)} type="button">
        Delete
      </button>
    </li>
  ));

  return <ul>{elements}</ul>;
};
