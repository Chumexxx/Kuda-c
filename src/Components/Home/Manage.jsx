import styled from "styled-components"
import ItemsImage from "../../assets/ItemsImage.png"

const Manage = () => {
    return(
        <Container>

            <Wrapper>
                <FunctionsImage>
                    <img src={ItemsImage} alt="" />
                </FunctionsImage>

                <TextDiv>
                    <h1>It's your money, we just help you manage it</h1>
                    <p>Save it, spend it, send it. It's up to you. Whatever you chose to do with your money, we'll make sure it's done better and free of
                        charge. We take responsibility for that.</p>
                </TextDiv>

            </Wrapper>

        </Container>
    )
}

export default Manage;

const Container = styled.div`
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding: 0px 10px;
    min-height: calc(60vh);
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-evenly;
`

const Wrapper = styled.div`
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    

    @media (max-width: 800px) {
        width: 90%;
    } 

`

const FunctionsImage = styled.div`
    

`

const TextDiv = styled.div`
    max-width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 800px) {
        max-width: 100%;
    align-items: center;
    text-align: center;
    }

    h1{
        color: #40196D;
        font-size: 36px;
        font-weight: 800;
        line-height: normal;
    }
`