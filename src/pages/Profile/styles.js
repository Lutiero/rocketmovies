import styled from "styled-components";

export const Container = styled.div`
> header {
    display: flex;
    align-items: center;
    justify-content: left;
    height: 15rem;
    background-color: ${({ theme }) => theme.COLORS.PINK}10;
    
    
    a {
        margin-left: 1rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
}   

`

export const Form = styled.form`
    position: relative;

    margin: 6rem auto;    

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    > input {
        width: 100%;
    }
    
 > main {
     margin-top: 8rem;
     min-width: 32rem;
 }

    > img {
        position: absolute;
        top: -14rem;
        border-radius: 50%;
        width: 18.6rem;
        height: 18.6rem;
    }
`