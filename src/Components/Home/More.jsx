import styled from "styled-components"
import { HiCreditCard } from "react-icons/hi2";
import { MdKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../../assets/hero.png" 


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
                    </Text>

                    <Image>
                        <img src={HeroImage} alt="" />
                    </Image>
                </MoneyWrapper>

            </MoneyDiv>

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
    }
`

const Image = styled.div`
    margin-top: 50px;
    overflow: hidden;

    img{
        width: 400px;
    }

`