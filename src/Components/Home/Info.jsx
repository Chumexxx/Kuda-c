import styled from "styled-components";
import { HiCreditCard } from "react-icons/hi2";


const Info = () => {

    const cardArray = [
        {
            title: <HiCreditCard size={20}/>,
            dsc: "Order a Kuda card on the app with pickup and delivery options."
        },
        {
            title:<HiCreditCard size={20}/>,
            dsc: "Enjoy cashless payment options online and offline."
        },
        {
            title: <HiCreditCard size={20}/>,
            dsc: "Pay your essential bills and buy gift cards easily."
        },
        {
            title: <HiCreditCard size={20}/>,
            dsc: "Get 25 free transfers to Nigerian banks every month."
        },
        {
            title: <HiCreditCard size={20}/>,
            dsc: "Save money automatically any time you spend"
        },
    ]

    return(

        <Container>

            <CardDiv>
                {cardArray.map((infoo, i)=>(
                <Card key={i}>
                    <TitleDiv>
                        {infoo.title}
                    </TitleDiv>

                    <WriteUp>
                        <p>{infoo.dsc} </p>
                    </WriteUp>
                </Card>
                ))}
            </CardDiv>

        </Container>

    )
}

export default Info;

const Container = styled.div`
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
`

const CardDiv = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`

const Card = styled.div`
    height: 130px;
    width: 300px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    background-color: white;
    color: purple;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 15px;

    img{
        border: 2px solid;
        width: 30px;
        height: 40px;
    }

@media (max-width: 800px) {
       width: 600px;
       height: 100px;
       flex-direction: row;
       justify-content: center;
       align-items: center;
       justify-content: space-evenly;
    } 
`

const TitleDiv = styled.div`
    background-color: #ddccdd;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
`

const WriteUp = styled.div`
    
`