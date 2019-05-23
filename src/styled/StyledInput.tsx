import styled from 'styled-components';
export default styled.input`
  height: 2rem;
  padding: 0.5rem;
  @media ${props => props.theme.mediaQueries.large} {
    width: 15rem;
  }
`;
