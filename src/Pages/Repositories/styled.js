import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #ffff;
`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    font-family: sans-serif;
`

export const ListItem = styled.li`
    margin: .5rem 0;
    background: #000;
    color: #fff;
    padding: .5rem;
`

export const LinkHome = styled(Link)`
    background: #ffff;
    padding:4px;
    font-family:sans-serif;
    border-radius:7px;
    display:block;
    margin:0 auto;
    width:2.6rem;
    text-decoration:none;
    &:hover {
        background-color: #222528;
        color:#fff;
        border:1px solid #fff;
    }

`


