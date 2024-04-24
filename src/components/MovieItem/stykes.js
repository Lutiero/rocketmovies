import styled from "styled-components"

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.PINK}10;

  padding: 3.2rem;

  max-width: 90rem;
  margin: 2rem auto;

  border-radius: 1rem;

  p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-top: 1rem;
  }

  footer {
    margin-top: 2rem;
  }

  svg {
    font-size: 1rem;
    margin-top: 1rem;
    margin-right: 0.4rem;
  }

  .starFilled {
    fill: ${({ theme }) => theme.COLORS.PINK};
  }
`
