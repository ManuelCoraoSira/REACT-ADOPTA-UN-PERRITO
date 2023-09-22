import PropTypes from 'prop-types'
import { Card as CardB, Badge } from 'react-bootstrap';


export const Card = ({url, name, description, raza}) => {
  return (
    <CardB style={{width: '18rem'}}>
        <img height={300} src={url} />
        <p className='name'>{name}</p>
        <p>{description}</p>
        <Badge bg="danger">{raza}</Badge>
    </CardB>
  );
};

Card.PropTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};