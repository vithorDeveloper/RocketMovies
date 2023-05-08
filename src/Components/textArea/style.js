import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;

    background-color: ${({theme}) => theme.colors.background_200};
    color: white;
    border-radius: 1rem;

    padding: 2rem 0 0 1.6rem;
`