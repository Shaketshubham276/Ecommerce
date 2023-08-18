import { Send } from '@mui/icons-material'
import { styled } from 'styled-components'
import {mobile} from "../responsive"
const Container =styled.div`
    height: 50vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`
const Title =styled.h1`
    font-size: 70px;
    margin-bottom: 20px;

`
const Description =styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign:"Center",})}
`
const InputContainer =styled.div`
    width: 53%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({width:"80%"})}


`
const Input =styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;

`
const Button =styled.button`
    flex: 1.5;
    border: none;
    background-color: #277c7c;
    color: white;

`

const NewsLetter = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Description>Get Timely Updates from your favourite products</Description>
        <InputContainer>
            <Input placeholder="Your email"/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter