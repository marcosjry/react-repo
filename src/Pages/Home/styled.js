import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction:column;
    height: 100vh;
    justify-content:center;
    align-items:center;
`

export const Content = styled.div`
    width:100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.8rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;

    &:focus, &active {
        outline: none;
        box-shadow: none;
    }    
`;

export const Button = styled.button`
    height: 1.99rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;

    &:focus, &active {
        outline: none;
        box-shadow: none;
    }
    &:hover {

        color: white;
        border:1px solid #fff;

    }
`

export const ErrorMsg = styled.span`
    display: block;
    font-size: 0.70rem;
    font-family: sans-serif;
    font-weight: 600;
    color: red;
    margin-top: 1rem;
`
