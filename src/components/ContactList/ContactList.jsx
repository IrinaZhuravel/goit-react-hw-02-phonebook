import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem';

const ContactList = ({ filterContacts, onClickDelete }) => {
  return (
    <ul>
      {filterContacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={onClickDelete}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClickDelete: PropTypes.func.isRequired,
};

export default ContactList;