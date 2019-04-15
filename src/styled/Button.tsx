import styled from 'styled-components'

 export default  styled.button`
    border:none;
    text-align:center;
    text-decoration:none;
    color: ${props => props.theme.colors.white};
    background-color:${props => props.theme.colors.primary};
 `