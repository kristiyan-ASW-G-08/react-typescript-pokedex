import styled from 'styled-components';

export default styled.div`
  ${props => props.theme.mixins.center};
  ${props => props.theme.mixins.border};
  padding: 1rem;
  width:100%;
`;
