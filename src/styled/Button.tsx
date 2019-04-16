import styled from 'styled-components';

interface ButtonProps {
  pokemonType?: string;
}
const Button = styled('button')<ButtonProps>`
  border: none;
  text-align: center;
  text-decoration: none;
  padding: 1rem;
  color: ${props => props.theme.colors.white};
  background-color: ${props =>
    props.pokemonType
      ? props.theme.colors.pokemonTypes[props.pokemonType]
      : props.theme.colors.primary};

`;
export default Button;
