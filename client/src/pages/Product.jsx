
import { styled } from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"
import { Add, Remove } from "@mui/icons-material"
import {mobile} from "../responsive"
const Container  =styled.div`
    
`
const Wrapper=styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding:"10px",flexDirection:"column"})}
`
const ImgContainer=styled.div`
    flex: 1;

`
const Image=styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
    ${mobile({height:"40vh"})}
`
const InfoContainer=styled.div`
    flex: 1;
    padding: 0px 50px;

    ${mobile({padding:"10px"})}
`
const Title=styled.h1`
    font-weight: 300;

`
const Desc=styled.div`
    margin: 20px 0px;

`
const Price=styled.div`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer=styled.div`
    width: 50%;
    margin: 30px 0px;

    display: flex;
    justify-content: space-between;
    ${mobile({width:"100%"})}


`
const Filter=styled.div`
    display: flex;
    align-items: center;

`
const FilterTitle=styled.span`
    font-size: 20px;
    font-weight: 200;

`
const FilterColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;


`
const FilterSize=styled.select`
    margin-left: 10px;
    padding: 10px;
`
const FilterSizeOption=styled.option`

`
const AddContainer=styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width:"100%"})}

`
const AmountContainer=styled.div`
    display: flex;
    align-items: center;
    font-weight: 7;
`
const Amount=styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 2px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;

`
const Button=styled.button`
    padding: 10px;
    border: 1px solid teal;
    cursor: pointer;
    background-color: #fbf5f5;
    font-weight: 500;
    &:hover{
        background-color: #efdddd;
    }
`

const Product = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        
        <Wrapper>
            <ImgContainer>
                <Image src="4.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Pepe Jeans Jumpsuit</Title>
                <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci consectetur necessitatibus ea illum vero eligendi praesentium soluta facilis officiis optio.</Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default Product