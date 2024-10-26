import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";
import LightImage from "../../assets/LightImage.png"


const Simpler = () => {
    return(
        <Container>

            <Wrapper>

                <TextDiv>
                    <h1> Your phone + our app + <br />a debit card = <br />a simpler life.</h1>
                    <p>We designed a money app for your lifestyle, and you can get a debit card to 
                        go with it. That's all you need to make the right money moves.
                    </p>

                    <Open>
                        <a href="#"><h3>Open An Account in Minutes</h3></a>
                        <MdKeyboardArrowRight size={20}/>
                    </Open>
                </TextDiv>

                <LightImg>
                    <img src={LightImage} alt="image" />
                </LightImg>

            </Wrapper>

        </Container>
    )
}

export default Simpler;


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

const Open = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 12px;
`

const LightImg = styled.div`
    
`