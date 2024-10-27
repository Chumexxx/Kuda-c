import styled from "styled-components"
import { HiCreditCard } from "react-icons/hi2";
import { MdKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../../assets/hero.png" 
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa"


const More = () => {

    const moreArray = [
        {
            image: <HiCreditCard size={20}/>,
            title: "Kuda Business",
            dsc: "Grow your business with our all-in-one business manager. Get a POS, bulk transfers, payroll and more.",
            link: "Learn More"
        },
        {
            image: <HiCreditCard size={20}/>,
            title: "Transfer & Spend",
            dsc: "Send money for free to any Nigerian account with 25 free transfers every month",
            link: "Learn More"
        },
        {
            image: <HiCreditCard size={20}/>,
            title: "Kuda Business",
            dsc: "Get up to ₦150,000 in your Kuda account easily and repay in convenient instalments",
            link: "Learn More"
        }

    ]

    return(
        <Container>

            <Wrapper>

                <h1>More for you</h1>

                <CardDiv>
                    {moreArray.map((more, i)=>(
                    <Card key={i}>
                        <ImageDiv>
                            {more.image}
                        </ImageDiv>

                        <TitleDiv>
                            <h2>{more.title} </h2>
                        </TitleDiv>

                        <DescDiv>
                            <p>{more.dsc}</p>
                        </DescDiv>

                        <LinkDiv>
                            <a href="#"><h4>{more.link}</h4></a>
                            <MdKeyboardArrowRight/>
                        </LinkDiv>
                    </Card>
                    ))}
                </CardDiv>

                <MoneyDiv>

                    <MoneyWrapper>
                        <Text>
                            <h1>The money app for Africans.</h1>
                            <p>Save, spend, send and invest money across borders.</p>
                            <button>Join Kuda</button>

                            <Buttons>
                                <a href="#">
                                    <Button>
                                        <div>
                                        <FaApple color="white" size={20}/> 
                                        </div>

                                        <div>
                                            <p style={{color: "white", fontSize: "8px"}}>Download on the <br /><span style={{color: "white", fontSize: "12px"}}>Apple Store</span></p>
                                        </div>
                                    </Button>
                                </a>

                                <a href="#">
                                    <Button2>
                                        <div>
                                        <BiLogoPlayStore color="white" size={30}/>
                                        </div>

                                        <div>
                                        <p style={{color: "white", fontSize: "10px"}}>GET IT ON <br /><span style={{color: "white", fontSize: "15px"}}>Google Play</span></p>
                                        </div>
                                    </Button2>
                                </a>

                            </Buttons>

                        </Text>

                        <Image>
                            <img src={HeroImage} alt="" />
                        </Image>
                    </MoneyWrapper>

                </MoneyDiv>

            </Wrapper>
            <hr style={{color: "gray"}} />
            
        </Container>
    )
}

export default More;

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 70px);

    h1{
        text-align: center;
        color: purple;
        margin-bottom: 50px;
    }
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

const CardDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-bottom: 50px;

    @media (max-width: 800px) {
        flex-wrap: wrap;
    }
`

const Card = styled.div`
    background-color: white;
    border-radius: 15px;
    width: 300px;
    padding: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

const ImageDiv = styled.div`
    
`

const TitleDiv = styled.div`
    h2{
        color: purple;
    }
`

const DescDiv = styled.div`

`

const LinkDiv = styled.div`
    display: flex;
    align-items: center;

    h4{
        color: purple;
    }
`

const MoneyDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 100px;

`

const MoneyWrapper = styled.div`
    width: 1050px;
    height: 300px;
    margin-top: 50px;
    background-color: #d0d0f1;
    display: flex;
    justify-content: center;
    border-radius: 15px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

const Text = styled.div`
    width: 400px;

    h1{
        text-align: left;
        margin-bottom: 30px;

        @media (max-width: 800px) {
            text-align: center;
    }
    }

    p{
        margin-bottom: 50px;
    }

    button{
        width: 120px;
        height: 40px;
        border-radius: 10px;
        border: none;
        color: white;
        background-color: purple;

        @media (max-width: 800px) {
        display: none;
}
    }
`

const Image = styled.div`
    margin-top: 50px;
    overflow: hidden;

    img{
        width: 400px;
    }

    @media (max-width: 800px) {
        display: none;
}

`

const Buttons = styled.div`
    margin-top: 50px;
    display: flex;
    gap: 20px;
    display: none;

    @media (max-width: 800px) {
        display: flex;
}
`

const Button = styled.div`
    display: flex;
    background-color: black;
    justify-content: center;
    gap: 4px;
    width: 120px;
    height: 40px;
    border-radius: 10px;
`

const Button2 = styled.div`
    display: flex;
    background-color: black;
    justify-content: center;
    gap: 4px;
    width: 150px;
    height: 40px;
    border-radius: 10px;
`
