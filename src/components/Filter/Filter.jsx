import PropTypes from 'prop-types';
import { FilterInput, FilterName } from './Filter.styled';

const Filter = ({ onChange, filter }) => {
  return (
    <>
      <FilterName>Find contacts by name</FilterName>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Please enter name to find contact"
        onChange={onChange}
      />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;