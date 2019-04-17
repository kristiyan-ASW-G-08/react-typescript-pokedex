import styled from 'styled-components';


const Button = styled('button')`
  border: none;
  height:2rem;
  color: ${props => props.theme.colors.white};
  background-color:${props => props.theme.colors.primary};

`;
export default Button;
