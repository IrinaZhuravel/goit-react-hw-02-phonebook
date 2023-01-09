import PropTypes from 'prop-types';
import { Contact, ContactText, Button } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onDelete }) => (
  <Contact key={id}>
    <ContactText>{name}</ContactText>
    <ContactText>{number}</ContactText>
    <Button
      type="button"
      id={id}
      onClick={() => onDelete(id)}
    >
      Delete
    </Button>
  </Contact>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
