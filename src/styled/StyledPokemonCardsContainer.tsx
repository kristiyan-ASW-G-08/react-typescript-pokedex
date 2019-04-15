import styled from 'styled-components'

 export default  styled.div`
 padding:1rem;
    width:100vw;
    display:grid;
    align-content:center;
    justify-items:center;
    grid-gap:1rem;
    @media ${props => props.theme.mediaQueries.medium} {
    grid-template-columns:1fr 1fr;
  }
  @media ${props => props.theme.mediaQueries.large} {
    grid-template-columns:repeat(4,1fr);
  }
 `