import styled from 'styled-components'

 export default  styled.div`
    width:90%;
    padding:1rem;
    box-shadow:0 5px 20px  rgba(0,0,0,.10);
    text-align:center;
    a{
        width:100%;
        display:block;
        text-decoration:none;
        color:${props => props.theme.colors.dark};
        font-size:0.8rem;
        };
        
    
 `