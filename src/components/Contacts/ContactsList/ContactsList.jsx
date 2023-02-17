export const ContactList = ({ list = [] }) => {
  const elements = list.map(item => (
    <li key={item.id}>
      <p>Name:{item.name}</p>
      <p>Number:{item.number}</p>
      <button type="button">Delete</button>
    </li>
  ));

  return <ul>{elements}</ul>;
};
