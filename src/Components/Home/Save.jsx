import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";
import SaveImage from "../../assets/SaveImage.png"

const Save = () => {
    return(
        <Container>

            <Wrapper>
                <TextDiv>
                    <h1>Save money as you spend it, seriously.</h1>
                    <p>You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow</p>

                    <See>
                        <a href="#"><h3>See all our savings</h3></a>
                        <MdKeyboardArrowRight size={20}/>
                    </See>
                </TextDiv>

                <LightImg>
                    <img src={SaveImage} alt="image" />
                </LightImg>
            </Wrapper>

        </Container>
    )
}

export default Save;


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

const See = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 12px;
`

const LightImg = styled.div`
    
`