import styled from "styled-components";
import Card1 from "../../assets/Card1.svg"


const Info = () => {

    const cardArray = [
        {
            title: <img src={Card1} alt="" />,
            dsc: "Order a Kuda card on the app with pickup and delivery options."
        },
        {
            title: "b",
            dsc: "Enjoy cashless payment options online and offline."
        },
        {
            title: "c",
            dsc: "Pay your essential bills and buy gift cards easily."
        },
        {
            title: "d",
            dsc: "Get 25 free transfers to Nigerian banks every month."
        },
        {
            title: "e",
            dsc: "Save money automatically any time you spend"
        },
    ]

    return(
        <div >
           {cardArray.map((infoo, i)=>(
            <Card key={i}>
            <img src={infoo.title} alt="" />
            <p>{infoo.dsc} </p>
           </Card>
           ))}
        </div>
    )
}

export default Info;

const Card = styled.div`
height: 130px;
width: 300px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
background-color: white;
color: purple;
font-weight: 700;
/* display: flex;
flex-direction: column;
justify-content: center;
justify-content: space-between; */
padding: 10px;
border-radius: 15px;
`