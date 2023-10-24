import { styled } from 'styled-components';

const FeedbackOptionsStyle = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  column-gap: 20px;
  justify-content: center;
  button {
    text-transform: capitalize;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
  }
  button.good:hover {
    background-color: green;
  }
  button.neutral:hover {
    background-color: yellow;
  }
  button.bad:hover {
    background-color: red;
  }
`;

export default FeedbackOptionsStyle;