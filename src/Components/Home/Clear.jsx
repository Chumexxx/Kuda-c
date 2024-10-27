import styled from "styled-components"
import ClearImage from "../../assets/ClearImage.png"
import { MdKeyboardArrowRight } from "react-icons/md";


const Clear = () => {
    return(
        <Container>

            <Wrapper>
                <ImageDiv>
                    <img src={ClearImage} alt="" />
                </ImageDiv>

                <TextDiv>
                    <h1>Fees as clear as glass.</h1>
                    <p>We’re serious about free banking, and we will never, ever charge you for anything without your consent</p>

                    <All>
                        <a href="#"><h3>See all our fees</h3></a>
                        <MdKeyboardArrowRight size={20}/>
                    </All>
                </TextDiv>
            </Wrapper>

        </Container>
    )
};

export default Clear;

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
    width: auto;
    justify-content: center;
}
`

const ImageDiv = styled.div`
    width: auto;
    height: auto;
`

const TextDiv = styled.div`
max-width: 320px;
display: flex;
flex-direction: column;
justify-content: center;
@media (max-width: 800px) {
    max-width: auto;
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

const All = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 12px;
`