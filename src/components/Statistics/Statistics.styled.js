import styled from "styled-components";

import { BiLike } from 'react-icons/bi';
import { MdPeople, MdAddShoppingCart } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

export const Container = styled.div`
margin: 0 auto;
width: 600px;
`
export const Title = styled.h2`
width: inherit;
text-align:center;
`
export const List = styled.ul`
display:flex;
padding: 0;
margin: 0 auto;
gap: 10px;
border-radius: 10px;
`
export const Item = styled(List).attrs({
    as:"li"
})`
width:80px;
background-color: white;
padding: 20px 40px;
flex-direction:column;
align-items:center;
text-align:center;

:focus, :hover{
 transform:scale(1.1)   
}
`


export const Total = styled.div`
color: #4A94EC;
font-weight: 800;
font-size: 24px;
`
export const Text = styled.span`
color: #9F9F9E;
`

export const Like = styled(BiLike)`
color: green;
width:30px;
height: 30px;
color: black;


:focus, :hover{
 color: green  
}
`