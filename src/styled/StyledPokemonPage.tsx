import styled from 'styled-components';

export default styled.div`
   width:100vw;
   padding:2rem;
  ${props => props.theme.mixins.center}
  display:grid;
  grid-template-columns: 1fr;
  grid-gap:1rem;
  @media ${props => props.theme.mediaQueries.large} {
    grid-template-columns:repeat(2,1fr);
  }
`;
