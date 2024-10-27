import styled from "styled-components"
import FreedomImage from "../../assets/FreedomImage.png"


const Freedom = () => {
    return(
        <Container>
            <h1>Chose the freedom you need</h1>

            <ImageDiv>
                <img src={FreedomImage} alt="" />
            </ImageDiv> 

        </Container>
    )
}

export default Freedom;


const Container = styled.div`
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding: 0px 10px;
    min-height: calc(100vh);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-content: space-evenly;

    h1{
        color: purple;
    }

    img{
        width: auto;
        height: auto;
    }

    @media (max-width: 800px) {
        max-width: auto;
    }
`

const ImageDiv = styled.div`
    max-width: auto;

    @media (max-width: 800px) {
            min-height: auto;
        
        }
`