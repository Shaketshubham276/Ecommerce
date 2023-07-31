import React from 'react'
import styled  from 'styled-components'
import {Search} from "@mui/icons-material"
const Container = styled.div`
    height:60px;
    font-size:32px;
    height:60px;

`
const Wrapper = styled.div`
    padding:10px 20px;  
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Left=styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    
`
const Center=styled.div`
    flex: 1;
`
const Right=styled.div`
    flex: 1;
`
const Language=styled.span`
font-size: 14px;
cursor: pointer;
`
const SearchContainer=styled.span`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;

`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Search/>
                    </SearchContainer>
                </Left>
                <Center>Center</Center>
                <Right>right</Right>
            </Wrapper>

        </Container>
    )
}

export default Navbar