import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa"
import styled from "styled-components";
import HeroImage from "../../assets/hero.png"


const Hero = () => {
    return(
        <Container>

            <Wrapper>
                <TextBox>
                   <h1>The money app for Africans.</h1>
                   <p>Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.</p>
                   <Buttons>

                        <Button>
                            <div style={{backgroundColor: "black", borderRadius: "10px"}}>
                            <FaApple color="white" size={20}/> 
                            </div>

                            <div>
                                <p style={{color: "white", fontSize: "8px"}}>Download on the <br /><span style={{color: "white", fontSize: "12px"}}>Apple Store</span></p>
                            </div>
                        </Button>

                        <Button2>
                            <div style={{backgroundColor: "black", borderRadius: "10px"}}>
                            <BiLogoPlayStore color="white" size={30}/>
                            </div>

                            <div>
                            <p style={{color: "white", fontSize: "10px"}}>GET IT ON <br /><span style={{color: "white", fontSize: "15px"}}>Google Play</span></p>
                            </div>
                        </Button2>

                   </Buttons>
                </TextBox>
                <ImageBox>
                    <img src={HeroImage} alt="Hero" />
                </ImageBox>

            </Wrapper>
           
        </Container>
    )
}

export default Hero;


const Container = styled.div`
max-width: 1280px;
margin-left: auto;
margin-right: auto;
padding: 0px 10px;
min-height: calc(100vh - 70px);
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width: 85%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
z-index: 2;
@media (max-width: 800px) {
    width: auto;
    justify-content: center;
}
`
const TextBox = styled.div`
max-width: 400px;
display: flex;
flex-direction: column;
justify-content: center;

@media (max-width: 800px) {
    max-width: auto;
    justify-content: center;
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
const ImageBox = styled.div`
img{
    @media (max-width: 800px) {
    width: auto;
    justify-content: center;
    align-items: center;
}
}
`

const Buttons = styled.div`
display: flex;
gap: 20px;
`

const Button = styled.div`
display: flex;
background-color: black;
justify-content: center;
align-items: center;
gap: 4px;
width: 120px;
height: 40px;
border-radius: 10px;
`

const Button2 = styled.div`
display: flex;
background-color: black;
justify-content: center;
align-items: center;
gap: 4px;
width: 150px;
height: 40px;
border-radius: 10px;
`