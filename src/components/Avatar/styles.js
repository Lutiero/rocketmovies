import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: right;

  p {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
`
