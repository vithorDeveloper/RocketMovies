import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.colors.background_100};
    color: ${({theme}) => theme.colors.white};

    border: ${({theme , isNew}) => isNew ? `0.1rem dashed ${theme.colors.background_100}` : `none`};

    border-radius: 0.8rem;

    button{
        background: none;
        border: none;
        color: ${({theme}) => theme.colors.pink};

    svg{
        margin-right: 1rem;
    }
    }

    input{
        background: transparent;
        color: ${({theme}) => theme.colors.white};
        padding: 1.6rem 0 1.6rem 1.6rem;
        width: 15rem;
        font-size: 1.6rem;
    }
`