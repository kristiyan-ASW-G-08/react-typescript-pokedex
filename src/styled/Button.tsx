import styled from 'styled-components';

interface ButtonProps {
  type?: string;
}
const Button = styled('p')<ButtonProps>`
  border: none;
  text-align: center;
  text-decoration: none;
  padding: 1rem;
  color: ${props => props.theme.colors.white};
  background-color: ${props =>
    props.type
      ? props.theme.colors.pokemonTypes[props.type]
      : props.theme.colors.primary};
`;
export default Button;
