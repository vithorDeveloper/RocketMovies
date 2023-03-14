import styled from "styled-components";

export const Container = styled.span`

  >svg{
    color: ${({theme}) => theme.colors.pink};
    fill: ${({theme, isActive}) => isActive ? theme.colors.pink : `$({theme}) => theme.colors.pink`};
  
    margin: 0.8rem 0.6rem 1.5rem 0;
  }
`