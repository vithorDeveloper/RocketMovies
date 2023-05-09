import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 11.6rem;
  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2.4rem 12.3rem;

  border-bottom: 1px solid #3E3B47;

    >h1{
      font-size: 2.4rem;
      color: ${({theme}) => theme.colors.pink};
    }

      
      color: ${({theme}) => theme.colors.white};

      >div{
        width: 60%;

        span{
          font-size: 1.4rem;
          color: ${({theme}) => theme.colors.gray_300};
        }
      }

      p{
        font-size: 1.4rem;
        font-weight: 700;
        position: relative;
        left: 1rem;
        color: ${({theme}) => theme.colors.white};
        }

    img{
      width: 6.4rem;
      height: 6.4rem;

      border: 1px solid #3E3B47;
      border-radius: 50%;

      margin-left: 1rem;
    }
`

export const Main = styled.main`

`