import styled from "styled-components";
import {Link } from "react-router-dom"
import HeaderLogo from "../assets/kuda.png"
import { IoMdArrowDropright } from "react-icons/io";
import { MdClose } from "react-icons/md";



const SideBar = () => {
    const test = () => {
        setToggle (false)
    }
    return(
        <Container>

            <Wrapper>
                <div style={{display: "flex", justifyContent: "right"}}>
                    <Link to="/" onClick={test}>
                        <MdClose size={40} color="black"/>
                    </Link>
                    
                </div>
                    
                <Buttons>
                    <img src={HeaderLogo} alt="" />

                    <button style={{color: "white", fontSize: "15px" , fontWeight: "400" , width: "120px" , height: "45px" , borderRadius: "5px" , border: "none" , backgroundColor: "purple"}}>Join Kuda</button>

                    <button style={{color: "purple", fontSize: "15px" , fontWeight: "400" , width: "120px" , height: "45px" , borderRadius: "5px" , border: "none" , backgroundColor: "#ebe1eb"}}>Sign In</button>
                </Buttons>

                
                <Link style={{textDecorationLine:"none" , display: "flex" , justifyContent: "space-between"}} to="/" onClick={test}>
                <nav>Personal</nav>
                <IoMdArrowDropright/>
                </Link>

                <Link style={{textDecorationLine:"none" , display: "flex" , justifyContent: "space-between"}}  to="/business" onClick={test} >
                <nav>Business</nav>
                <IoMdArrowDropright/>
                </Link>

                <Link style={{textDecorationLine:"none" , display: "flex" , justifyContent: "space-between"}} to="/companies" onClick={test}>
                <nav>Companies</nav>
                <IoMdArrowDropright/>
                </Link>

                <Link style={{textDecorationLine:"none" }}  to="/developers" onClick={test}>
                <nav>Developers</nav>
                </Link>

                <Link style={{textDecorationLine:"none"}}  to="/contactUs" onClick={test}>
                <nav>Contact Us</nav>
                </Link>

                <Link style={{textDecorationLine:"none" , display: "flex" , justifyContent: "space-between"}}  to="/help" onClick={test}>
                <nav>Help</nav>
                <IoMdArrowDropright/>
                </Link>

            </Wrapper>
            
        </Container>
    )
}

export default SideBar;


const Container = styled.div`
min-height: calc(100vh - 80px);
background-color: white;
color: purple;

    nav{
        font-size: 20px;
        font-weight: 500;
        color: purple;
        line-height: 50px;
    }
`

const Wrapper = styled.div`
    padding: 60px;
`

const Buttons = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 50px;

    img{
        width: 100px;
    }
`

const LinkDiv = styled.div`
    
`

