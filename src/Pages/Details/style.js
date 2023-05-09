import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-areas:
    "header"
    "textButton"
    "content";

    header{
      margin-bottom: 4rem;
    }

    >.buttonBack{
      display: flex;
      align-items: center;

      margin-left: 2%;
      color: ${({theme}) => theme.colors.pink};
    }
`

export const Main = styled.div`
      width: 130rem;
      height: 58.0rem;

      padding-right: 2.4rem;
      margin: 2.4rem auto;

      grid-area: content;
      overflow-y: scroll;

      ::-webkit-scrollbar-track {
    background-color: transparent;
    
    }

    ::-webkit-scrollbar-thumb {
      border-radius:0.8rem;
    background: ${({theme}) => theme.colors.pink};
    }

    ::-webkit-scrollbar {
    width: 0.8rem;
    }

    .tags{
      margin-bottom: 4rem;

      span:nth-child(1n+1){
      background-color: ${({theme}) => theme.colors.background_rgba};
      }
    }
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({theme}) => theme.colors.white};

    h1{
    font-weight: 500;
    font-size: 3.6rem;
    padding-right: 2rem;
    margin-bottom: 2.4rem
    }

    svg
    {
      width: 2rem;
      height: 2rem;
    }
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 4rem;

    img{
      width: 1.6rem;
      margin-right: 1rem;
    }

    span{
      margin-left: 2rem;
    }

    svg{
      color: ${({theme}) => theme.colors.pink};
      
    }
`