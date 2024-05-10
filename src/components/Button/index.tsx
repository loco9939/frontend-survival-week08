import styled from 'styled-components';

type ButtonProps = {
  type?:'submit'|'button'|'reset'
}

/** Styled-Component Button */
const StyledButton = styled.button.attrs<ButtonProps>(
  (props) => ({ type: props.type ?? 'button' }),
)<ButtonProps>`

`;

export default StyledButton;
