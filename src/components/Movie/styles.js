import styled from "styled-components"

export const Container = styled.div`
    max-width: 100rem;
    margin: 5rem auto;
    color: ${({theme}) => theme.COLORS.WHITE};
        
    p {
        margin-top: 2rem;
        margin-bottom: 4rem;
        
        text-align: justify;
    }
    
    > div > span {
        background-color: ${({ theme }) => theme.COLORS.PINK}20;
        
    }
    
    .navLink {
        display: flex;
        align-items: center;
        justify-content: left;
    }

    .navLink a {
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.PINK};
        
    }
    
    svg {
        margin: 0 .6rem 0 0;
    }
`
