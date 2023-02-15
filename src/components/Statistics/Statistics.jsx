import PropTypes from 'prop-types';
import { Container, Title, List, Total, Text, Item } from './Statistics.styled';
import { BiLike } from 'react-icons/bi';
import { MdPeople, MdAddShoppingCart } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { Like } from './Statistics.styled';

const iconArr = [<Like />, <MdPeople />, <MdAddShoppingCart />, <GiTreeDoor />];

export const Statistics = ({ title, data }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <List>
        {data.map(({ id, title, total }, index) => (
          <Item key={id}>
            <Total>
              <div>{iconArr[index]}</div>
              {total}
            </Total>
            <Text>{title}</Text>
          </Item>
        ))}
      </List>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
    })
  ),
};
