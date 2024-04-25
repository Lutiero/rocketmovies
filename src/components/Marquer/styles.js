import styled from "styled-components"

export const Container = styled.span`
  font-size: 1rem;
  font-weight: 150;

  padding: 0.2rem 1.2rem;
  border-radius: 0.4rem;
  margin-right: 1.6rem;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`
