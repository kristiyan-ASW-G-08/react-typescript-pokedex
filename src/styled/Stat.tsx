import styled from 'styled-components'

 export default  styled.p`
    color:${props => (props => props.theme.colors.dark)};
    font-size:1.1rem;
 `