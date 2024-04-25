import styled from "styled-components"

export const Container = styled.span`
  font-weight: 400;

  padding: 1.8rem 2rem;

  border: ${({ theme, $isnewmarquer }) =>
    $isnewmarquer ? "none" : `1px dashed ${theme.COLORS.GRAY_100}`};
  border-radius: 0.8rem;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme, $isnewmarquer }) =>
    $isnewmarquer ? theme.COLORS.GRAY_200 : "transparent"};

  margin-right: 2rem;
`
