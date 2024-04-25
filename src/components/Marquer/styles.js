import styled from "styled-components"

export const Container = styled.span`
    font-weight: 400;

    padding: 1.8rem 2rem;
    border-radius: 0.8rem;  

    color: ${({theme}) => theme.COLORS.WHITE};
    background-color: ${({theme}) => theme.COLORS.GRAY_200};
`
