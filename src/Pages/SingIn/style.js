import styled from "styled-components";
import background from "../../assets/background.png";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    padding: 0 13.6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    >h1{
      font-size: 4.5rem;

      color: ${({theme}) => theme.colors.pink};
    }

    >p{
      font-weight: 400;
      font-size: 1.4rem;

      color: ${({theme}) => theme.colors.gray_300};
    }

    >h2{
      font-weight: 500;

      margin: 6rem 13rem 4.8rem 0; 
    }

    >button{
      margin: 2.4rem 0 4.8rem;
    }
`

export const Background = styled.div`
    flex:1;
    background-image: url(${background});
    background-position: fixed;
    background-repeat: no-repeat;
    background-size: cover;
`