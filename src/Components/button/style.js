import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;
    
    font-size: 1.6rem;

    background-color: ${({theme, isActive}) => isActive ? theme.colors.pink : "#0D0C0F"};
    color: ${({theme , isActive}) => isActive ? theme.colors.background_300 : theme.colors.pink};

    border-radius: 0.8rem;
`