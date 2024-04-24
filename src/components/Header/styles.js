import styled from "styled-components"

export const Container = styled.div`
  height: 10.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  color: ${({ theme }) => theme.COLORS.PINK};
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;

  padding-top: 2rem;

  h1 {
    font-size: 2.4rem;
  }
`
