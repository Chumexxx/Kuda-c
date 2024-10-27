import styled from "styled-components";
import BlockImage from "../../assets/BlockImage.png"
import { MdKeyboardArrowRight } from "react-icons/md";

const Safety = () => {
    return(
        <Container>

            <Wrapper>
                <ImgDiv>
                    <img src={BlockImage} alt="image" />
                </ImgDiv>

                <TextDiv>
                    <h1>Turn off access, turn on safety.</h1>
                    <p>Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try.</p>

                    <Learn>
                        <a href="#"><h3>Learn more about Cards</h3></a>
                        <MdKeyboardArrowRight size={20}/>
                    </Learn>
                </TextDiv>
            </Wrapper>

        </Container>
    )
}

export default Safety;


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

const ImgDiv = styled.div`
    display: flex;
    justify-content: center;
img{
    @media (max-width: 800px) {
    width: auto;
    justify-content: center;
    align-items: center;
}
}
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


h1{
    color: #40196D;
    font-size: 36px;
    font-weight: 800;
    line-height: normal;
}
`

const Learn = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 12px;
`