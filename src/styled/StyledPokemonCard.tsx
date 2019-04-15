import styled from 'styled-components'

 export default  styled.div`
    padding:1rem;
    box-shadow:0 5px 20px  rgba(0,0,0,.10);
    text-align:center;
    width:90%;
    a{
        display:block;
        text-decoration:none;
        color:${props => props.theme.colors.dark};
        };
    
 `