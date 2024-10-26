import styled from "styled-components"
import HelloImage from "../../assets/HelloImage.png"
import { MdKeyboardArrowRight } from "react-icons/md";

const Happy = () => {
    return(
        <Container>

            <Wrapper>
                <TextDiv>
                    <h1>We're always happy to help you</h1>
                    <p>You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy.</p>

                    <Help>
                    <a href="#"><h3>Get Help</h3></a>
                    <MdKeyboardArrowRight size={20}/>
                    </Help>
                </TextDiv>

                <img src={HelloImage} alt="image" />
            </Wrapper>

        </Container>
    )
}

export default Happy;

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

const Help = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 12px; 
`