import styled from 'styled-components';

export default styled.div`
  width: 100%;
  text-align:center;
  img {
    object-fit:cover;
    width:70%;
  }
  @media ${props => props.theme.mediaQueries.large} {
    width:10rem;
    img {
    width:90%;
  }
  }
`;
