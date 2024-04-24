import styled from "styled-components"

export const Container = styled.button`
  font-size: 1.2rem;
  font-weight: 600;

  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  padding: 1.6rem;

  border-radius: 1rem;
`
