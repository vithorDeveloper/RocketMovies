import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: auto;
    grid-template-areas:
    "header"
    "title"
    "content";
  
`

export const Main = styled.div`
    width: 113rem;
    padding-right: 1rem;

    margin: 0 auto;

    overflow-y: auto;
    grid-area: content;

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
  
`

export const Title = styled.div`
    width: 113rem;

    grid-area: title;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5rem auto 4rem;

  >h1{
    font-weight: 400;
    color: ${({theme}) => theme.colors.white};
  }

  >a{ 
    width: 20.7rem;

    Button{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }
  }
`

export const MovieInfo = styled.div`
    width: 100%;
    height: 22.3rem;

    background: rgba(255, 133, 155, 0.05);

    padding: 3.2rem;
    margin-bottom:2.4rem;
    border-radius: 1.6rem;

  >p{
    color: ${({theme}) => theme.colors.gray_100};

    margin-bottom: 2.9rem;

    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.5rem;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`