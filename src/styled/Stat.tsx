import styled from 'styled-components';

interface StatProps {
  light?: boolean;
  large?: boolean;
}
const Stat = styled('p')<StatProps>`
  color: ${props  => (props.light ?props.theme.colors.lighterDark    : props.theme.colors.dark )};
  font-size: ${props  => (props.large ? '1rem' : '1.1rem')};
`;
export default Stat;
