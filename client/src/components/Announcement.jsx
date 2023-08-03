import styled from "styled-components"

const Container =styled.div`
    height: 30px;
    background-color: teal;
    color: white;
`

const Announcement = () => {
  return (
    <Container>
        30% OFF on all products.. SHIPPING FREE!!!
    </Container>
  )
}

export default Announcement