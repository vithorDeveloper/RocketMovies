import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.colors.background_200};

    display: flex;
    align-items: center;

    border-radius: 1rem;

    margin-bottom: 0.8rem;

  >input{
    height: 5.6rem;  
    
    background-color: transparent;

    padding-left: 1.6rem;
  }

  >svg{
    color: ${({theme}) => theme.colors.gray_100};

    margin-left: 1.2rem
  }
`