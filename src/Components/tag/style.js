import styled from "styled-components";

export const Container = styled.span`
  padding: 0.5rem 1.6rem;
  margin: 0 0.8rem 0 0;
  font-size: 1.2rem;

  background-color: ${({theme}) => theme.colors.background_100};
  color: ${({theme}) => theme.colors.gray_200};

  border-radius: 0.8rem;
`