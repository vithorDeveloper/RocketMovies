import styled from "styled-components";

export const Container = styled.div`

    >main{

      >.buttonBack{
      display: flex;
      align-items: center;

      margin-left: 2%;
      color: ${({theme}) => theme.colors.pink};

      margin-top: 10rem;
    }

    p:nth-child(4){
      margin: 4rem 0 2.4rem;
      color: ${({theme}) => theme.colors.gray_100}
    }
  }
`
export const Content= styled.div`
    width: 113rem;

    padding: 0 2.4rem 2.6rem 0;
    margin: 0 auto;

    .inputs-buttons{
      display: flex;
      gap: 4rem;
      margin: 4rem 0 4rem;
    }

    textarea{
      height: 27.0rem;
      size: none;
    }

    .tags{
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      gap: 4rem;

      background-color: #0D0C0F;
      padding: 1.6rem;
      border-radius: 0.8rem;;      

    div{
      display: flex;
      align-items: center;
    }
    }
`