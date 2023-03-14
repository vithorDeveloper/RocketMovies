import styled from "styled-components";

export const Container = styled.div`

    header{
      height: 14.4rem;

      display: flex;
      align-items: center;
      gap: 0.5rem;

      padding-left: 14.4rem;
      
      background-color: ${({theme}) => theme.colors.background_rgba};

    a, svg{
      color: ${({theme}) => theme.colors.pink};
    }
    }
`
export const Avatar = styled.div`
    display: flex;
    justify-content: center;

    position:relative;
    bottom: 9rem;

    >img{
      width: 18.6rem;
    }

    >label{
      background-color: ${({theme}) => theme.colors.pink};

      display: flex;
      justify-content: center;
      align-items: center;

      width: 4.8rem;
      height: 4.8rem;

      border-radius: 50%;

      position: relative;
      top: 13rem;
      right: 5rem;

    >svg{
      position: relative;
      color: ${({theme}) => theme.colors.background_300};
    }

    >input{
      display: none;
    }
    }
`

export const Form = styled.form`
    width: 34.0rem;

    margin: 0 auto;


    div:nth-child(3){
      margin-bottom: 2.4rem;
    }

    button{
      margin-top: 2.4rem;
      font-weight: 500;
    }
`