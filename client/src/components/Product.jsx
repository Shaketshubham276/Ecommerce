import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import styled from "styled-components"
import {mobile} from "../responsive"
const Info = styled.div`
    opacity: 0;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    cursor: pointer;

`
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fef8f8;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
    ${mobile({minWidth:"130px",height:"280px"})}
    

`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
    object-fit: cover;
    ${mobile({height:"67%",overflow:"hidden"})}
    
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.3s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);

    }
`
const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorder />
                </Icon>
            </Info>
        </Container>
    )
}
export default Product;
