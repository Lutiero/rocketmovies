import styled from "styled-components"

import backgroundImg from "../../assets/backgroundCinema.png"

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`

export const Form = styled.form`
  padding: 0 16.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.4rem;
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 400;
    margin: 4.8rem 0;
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-weight: 400;
    margin-top: 4.2rem;
    text-align: center;
  }

  svg {
    margin-right: 0.2rem;
  }
`
