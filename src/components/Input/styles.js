import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  border-radius: 1rem;
  margin-bottom: 0.8rem;

  > input {
    height: 5.6rem;

    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    background: transparent;

    padding: 1.2rem;
  }

  svg {
    margin-left: 1.6rem;
  }
`
