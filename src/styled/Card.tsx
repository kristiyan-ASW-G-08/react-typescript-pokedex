import styled from 'styled-components';

interface CardProps {
  grid?: boolean;
}
const Card = styled('div')<CardProps>`
  ${props => props.theme.mixins.center};
  ${props => props.theme.mixins.border};
  padding: 1rem;
  width: 100%;
  @media ${props => props.theme.mediaQueries.large} {
    ${props =>props.grid ?  'grid-template-columns: repeat(4, 1fr)' : ''}
  }
`;

export default Card;
