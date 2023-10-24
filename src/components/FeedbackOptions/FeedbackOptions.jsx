import ButtonItem from './ButtonItem';
import FeedbackOptionsStyle from './FeedbackoptionsStyle.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsStyle>
      {options.map(button => (
        <ButtonItem
          onLeaveFeedback={onLeaveFeedback}
          children={button}
          key={button}
        />
      ))}
    </FeedbackOptionsStyle>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};