import PropTypes from 'prop-types';

const FeedbackItem = ({ children, value, decoration }) => {
  return (
    <li className={children.toLowerCase()}>
      {children}: {value}
      {decoration}
    </li>
  );
};

export default FeedbackItem;

FeedbackItem.propTypes = {
  children: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  decoration: PropTypes.string,
};