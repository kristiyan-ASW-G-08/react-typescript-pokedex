import styled from 'styled-components';

export default styled.div`
   width:100vw;
   padding:1rem;
  ${props => props.theme.mixins.center}
  display:grid;
  grid-template-columns: 1fr;
`;
