import styled from "styled-components";

export const Container = styled.div`
    a {
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.PINK};
    }
    
`

export const Form = styled.form`
        margin: 4rem 12rem;
        
        h1 {
            margin-top: 2.4rem;
        }
    .input-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        margin-top: 4rem;
        margin-bottom: 4rem;
    }
    
    h5 {
        margin-bottom: 2.4rem;
    }
    
`