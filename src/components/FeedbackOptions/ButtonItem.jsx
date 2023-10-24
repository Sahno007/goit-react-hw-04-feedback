import PropTypes from 'prop-types';

const ButtonItem = ({ children, onLeaveFeedback }) => {
  return (
    <button className={children} onClick={onLeaveFeedback} type="button">
      {children}
    </button>
  );
};

export default ButtonItem;

ButtonItem.propTypes = {
  children: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};