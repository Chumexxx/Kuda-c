import { useEffect } from 'react';
import { useState } from 'react'
import styled from "styled-components"
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const UseEffect =()=>{

    const[display, setDisplay] = useState([])
    const[loading, setLoading] = useState(true)

    useEffect(()=>{

        const fetchData = async () =>{

            try{
                setLoading(true)
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await response.json();
                setDisplay(data);
            }catch (error){
                console.error("Error:", error);
            }finally{
                setLoading(false)
            }
        }

        fetchData()

    },[])

    return(
            <WrapAll>
                {
                    loading ? (

                        <Logo>
                           <Load/> 
                        </Logo>

                    ) : (

                        <Contain>

                            {
                                display.map((post, index)=>(

                                    <ContainEach key={index}>

                                        <Top>
                                            {post.id}: {post.title}
                                        </Top>

                                        <Bottom>
                                            {post.body}
                                        </Bottom>

                                    </ContainEach>

                                ))   
                            }

                        </Contain>

                    )  
                }
            </WrapAll>
    );
};
export default UseEffect;

const WrapAll = styled.div`
    border: none;
`

const Load = styled(AiOutlineLoading3Quarters)`
    
    font-size:50px;
    animation: spin 1s linear infinite;
    
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

`

const Logo = styled.div`
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;

`


const Contain = styled.div`
    border: 2px black solid;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    width: 80%;
    height: 85%;
    margin: 10% 10% 5% 10%;

    @media (max-width: 1107px) {
        margin-left: 8%;
        width: 84%;
        margin-right: 8%;
    }

    @media (max-width: 1056px) {
        margin-left: 5%;
        width: 90%;
        margin-right: 5%;
    }

    @media (max-width: 921px) {
        margin-left: 2%;
        width: 96%;
        margin-right: 2%;
    }

    @media (max-width: 853px) {
        margin-left: 10%;
        width: 80%;
        margin-right: 10%;
    }

    @media (max-width: 769px) {
        margin: 15% 10% 18% 10%;
    }

    @media (max-width: 749px) {
        margin-left: 5%;
        width: 90%;
        margin-right: 5%;
    }

    @media (max-width: 693px) {
        margin-left: 2%;
        width: 96%;
        margin-right: 2%;
    }

    @media (max-width: 651px) {
        margin-left: 1%;
        width: 98%;
        margin-right: 1%;
    }

`

const ContainEach = styled.div`
    width: 26.7%;
    display: flex;
    margin-top: 20px;
    margin-bottom: 30px;
    flex-direction: column;
    border-radius: 10px;
    background-color: #40196d;

    @media (max-width: 853px) {
        width: 40%;
    }

    @media (max-width: 651px) {
        width: 35%;
    }

    @media (max-width: 653px) {
        width: 40%;
    }

`

const Top = styled.div`
    height: fit-content;
    text-align: center;
    align-content: start;
    box-sizing: border-box;
    padding: 20px 10px 10px 10px;
    color: white;
    border-bottom: 1px white solid;

`

const Bottom = styled.div`
    height: fit-content;
    text-align: center;
    align-content: center;
    box-sizing: border-box;
    padding: 10px 10px 20px 10px;
    color: white;

`