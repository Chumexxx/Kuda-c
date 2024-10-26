import styled from "styled-components";
import {Link } from "react-router-dom"



const SideBar = () => {
    return(
        <Container>
            <Link to="/" onClick={test}>
            <nav>Personal</nav>
            </Link>
            <Link to="/business" onClick={test} >
            <nav>Business</nav></Link>
            <Link to="/companies" onClick={test}>
            <nav>Companies</nav></Link>
        </Container>
    )
}

export default SideBar;


const Container = styled.div`
min-height: calc(100vh - 80px);
background-color: rebeccapurple;
color: #fff;
`