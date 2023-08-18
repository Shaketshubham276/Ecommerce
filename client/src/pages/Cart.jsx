import React from 'react'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import { styled } from 'styled-components'
import { Add, Remove } from '@mui/icons-material'
import {mobile} from "../responsive"

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding:20px;
    ${mobile({padding:"10px"})}

`
const Title = styled.h1`
    margin-top: 10px;
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`


const TopTexts = styled.div`
    ${mobile({display:"none"})}
`
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px; 
`
const TopButtom = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({justifyContent:"space-around"})}
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 300px;
    margin-left: 20px;
    ${mobile({width:"170px",objectFit:"cover",marginBottom:"10px",marginLeft:"10px"})}


`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    ${mobile({padding:"0px 10px 10px 10px"})}
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
${mobile({width:"12px",height:'12px'})}
`
const ProductSize = styled.div`

`
const PriceDetail = styled.div`
    flex: 0.7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const ProductAmountContainer=styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    ${mobile({marginBottom:"0px"})}

`
const ProductAmount=styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({fontSize:"22px"})}

`
const ProductPrice=styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({fontSize:"23px"})}
`

const Summary = styled.div`
    margin-right: 20px;
    flex: 1.1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
    

`
const SummaryTitle = styled.h1`
    font-size: 200;


`
const SummaryItem = styled.div`
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type==="total" && "500"};
    font-size: ${props=>props.type==="total" && "24px"};
`
const SummaryItemText = styled.span`
    

`
const SummaryItemPrice = styled.span`
    

`
const Button=styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;

`


const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButtom>CONTINUE SHOPPING</TopButtom>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>OUR WISHLIST(0)</TopText>

                    </TopTexts>
                    <TopButtom type="filled">CHECKOUT NOW</TopButtom>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="8.jpeg" /><b></b>
                                <Details>
                                    <ProductName><b>Product:</b>Campus Running Shoes</ProductName>
                                    <ProductId><b>ID:</b>989564877</ProductId>
                                    <ProductSize><b>Size:</b>8</ProductSize>
                                    <ProductColor color="black"/>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>3</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 20</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$78</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 6</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -6</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>$78</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>

                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart