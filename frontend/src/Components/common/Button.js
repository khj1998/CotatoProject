import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

const buttonStyle = css`
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1rem;

  padding: 0.25rem 1rem;
  margin-right:5px;
  color: black;
  outline: none;
  cursor: pointer;

  background: transparent;
  &:hover {
    background: #F4DFD0;
  }

  ${props =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;

    `}

  ${props =>
    props.cyan &&
    css`
      background: #D0B8A8;
      &:hover {
0        background: #D0B8A8;
      }
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;
const Button = props => {
  return props.to ? (
    <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;