export const ContactList = ({ list = [], remove }) => {
  const elements = list.map(item => (
    <li key={item.id}>
      <p>Name:{item.name}</p>
      <p>Number:{item.number}</p>
      <button onClick={() => remove(item.id)} type="button">
        Delete
      </button>
    </li>
  ));

  return <ul>{elements}</ul>;
};
