import styled from "styled-components";
import FooterLogo from "../assets/Kuda.png"
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



const Footer = () => {
    return(
        <Container>

            <Wrapper>
            
                <EveryList>
                    <FirstList>
                        <ul>
                            <li><img src={FooterLogo} alt="" /></li>
                        </ul>
                    </FirstList>

                    <SecondList>
                        <ul>
                            <li style={{listStyleType: "none", color: "purple"}}><strong>Personal</strong></li>
                            <a href="#"><li style={{listStyleType: "none" , textDecorationLine: "none"}}>Discover Personal</li></a>
                            <a href="#"><li>Transfer & Spend</li></a>
                            <a href="#"><li>Save</li></a>
                            <a href="#"><li>Investments</li></a>
                            <a href="#"><li>Kuda card</li></a>
                        </ul>
                    </SecondList>

                    <ThirdList>
                        <ul>
                            <li style={{listStyleType: "none", color: "purple"}}><strong>Business</strong></li>
                            <a href="#"><li>Discover Business</li></a>
                            <a href="#"><li>Business Registration</li></a>
                            <a href="#"><li>softPOS</li></a>
                            <a href="#"><li>Invoicing</li></a>
                            <a href="#"><li>POS Machine</li></a>
                            <a href="#"><li>Business Loan</li></a>
                            <a href="#"><li>Business API</li></a>
                            <a href="#"><li>Join Kuda Business</li></a>
                        </ul>
                    </ThirdList>

                    <FourthList>
                        <ul>
                            <li style={{listStyleType: "none", color: "purple"}}><strong>Company</strong></li>
                            <a href="#"><li>Blog</li></a>
                            <a href="#"><li>Press</li></a>
                            <a href="#"><li>Join Our Team</li></a>
                            <a href="#"><li>About Us</li></a>
                        </ul>
                    </FourthList>

                    <FifthList>
                        <ul>
                            <li style={{listStyleType: "none", color: "purple"}}><strong>Help</strong></li>
                            <a href="#"><li>Get Help</li></a>
                            <a href="#"><li>Scam Awareness</li></a>
                            <a href="#"><li>FAQs</li></a>
                            <a href="#"><li>Security</li></a>
                            <a href="#"><li>Contact Us</li></a>
                            <a href="#"><li>Self Help</li></a>
                        </ul>
                    </FifthList>

                    <SixthList>
                        <ul>
                            <li style={{listStyleType: "none", color: "purple"}}><strong>Transparency</strong></li>
                            <a href="#"><li>Terms & Conditions</li></a>
                            <a href="#"><li>Privacy Policy</li></a>
                            <a href="#"><li>Information Security Policy</li></a>
                            <a href="#"><li>Cookie Policy</li></a>
                            <a href="#"><li>Whistleblowing Policy</li></a>
                        </ul>
                    </SixthList>
                </EveryList>

                <Buttons>
                    <a href="#">
                        <Button>
                            <div style={{backgroundColor: "black", borderRadius: "10px"}}>
                            <FaApple color="white" size={20}/> 
                            </div>

                            <div>
                                <p style={{color: "white", fontSize: "8px"}}>Download on the <br /><span style={{color: "white", fontSize: "12px"}}>Apple Store</span></p>
                            </div>
                        </Button>
                    </a>

                    <a href="#">
                        <Button2>
                            <div style={{backgroundColor: "black", borderRadius: "10px"}}>
                            <BiLogoPlayStore color="white" size={30}/>
                            </div>

                            <div>
                            <p style={{color: "white", fontSize: "10px"}}>GET IT ON <br /><span style={{color: "white", fontSize: "15px"}}>Google Play</span></p>
                            </div>
                        </Button2>
                    </a>

                    <a style={{textDecoration: "none"}} href="#">
                        <Button3>
                            <div>
                            <BiLogoPlayStore color="white" size={30}/>
                            </div>

                            <div>
                            <p style={{color: "white", fontSize: "10px"}}>Sign in to <strong>Kuda</strong> <br /><span style={{color: "white", fontSize: "12px"}}>On The Web</span></p>
                            </div>
                        </Button3>
                        <p style={{color: "purple", textAlign: "center", marginTop: "50px"}}>Products may vary by country or market</p>
                    </a>

                </Buttons>

                <NewList>
                    
                    <SeventhList>
                        <ul>
                            <li><strong>Contact</strong></li>
                            <a href=""><li><strong>help@kuda.com</strong></li></a>
                        </ul>

                        <SocialDiv>
                            <IconDiv>
                                <FaXTwitter size={15}/>
                            </IconDiv>

                            <IconDiv>
                                <FaInstagram size={15}/>
                            </IconDiv>

                            <IconDiv>
                                <FaFacebookF size={15}/>
                            </IconDiv>

                            <IconDiv>
                                <FaYoutube size={15}/>
                            </IconDiv>

                            <IconDiv>
                                <FaMediumM size={15}/>
                            </IconDiv>

                            <IconDiv>
                                <FaLinkedin size={15}/>
                            </IconDiv>
                           
                        </SocialDiv>
                    </SeventhList>

                    <EightList>
                        <ul>
                            <li><strong>Lagos</strong></li>
                            <li>1-11 Commercial Avenue, Yaba, Lagos,
                            Nigeria</li>
                        </ul>
                    </EightList>

                    <NinthList>
                        <ul>
                            <li><strong>London</strong></li>
                            <li>5 New Street Square,London, EC4A 3TW, United Kingdom</li>
                        </ul>
                    </NinthList>

                    <TenthList>
                        <ul>
                            <li><strong>Cape Town</strong></li>
                            <li>146 Campground Road,
                            Snakepit Building, Level 4, Newlands, Cape Town</li>
                        </ul>
                    </TenthList>

                    <EleventhList>
                        <ul>
                            <li><strong>Canada</strong></li>
                            <li>3080 Yonge Street, Suite 6060, Toronto, Ontario M4N 3N1</li>
                        </ul>
                    </EleventhList>
                </NewList>

                <FooterInfo>
                    <p>© 2024 Kuda Technologies Ltd (Company No.11472232). All rights reserved.</p>
                    <p>If you would like to find out more about which Kuda entity you receive services from, please reach out to us via the in-app chat in the Kuda app. Nigerian banking services offered by Kuda Microfinance Bank (RC796975) with registered address at 1-11 Commercial Avenue, Yaba, Lagos, Nigeria. Kuda Microfinance Bank is licensed by the Central Bank of Nigeria. Deposits are insured by the Nigerian Deposit Insurance Corporation (NDIC).</p>
                    <p>UK services are offered by Kuda EMI Ltd (Company No. 13724208) with registered address at 5 New Street Square, London, EC4A 3TW, United Kingdom.</p>
                    <p>Canada services will be provided by Kuda Canada Technologies Limited, an Ontario corporation registered under number 1000286176, with its registered address located at 3080 Yonge Street, Suite 6060, Toronto, Ontario M4N 3N1. Kuda Canada Technologies Limited is duly registered with The Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) as a money service business, bearing registration number M23163015</p>
                </FooterInfo>

            </Wrapper>

        </Container>
    )
}

export default Footer;


const Container = styled.div`
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding: 0px 10px;
    min-height: calc(120vh);
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 800px) {
        width: 500px;
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

const EveryList = styled.div`
    display: flex;

    @media (max-width: 800px) {
    flex-wrap: wrap;
}
`

const FirstList = styled.div`

    li{
        list-style-type: none;
    }

    img{
        width: 100px;
    }
`

const SecondList = styled.div`

    li{
        list-style-type: none;
        color: black;
        margin-bottom: 20px;
    }

    a{
        text-decoration: none;
    }
`

const ThirdList = styled.div`
    li{
        list-style-type: none;
        color: black;
        margin-bottom: 20px;
    }

    a{
        text-decoration: none;
    }
`

const FourthList = styled.div`
    li{
        list-style-type: none;
        color: black;
        margin-bottom: 20px;
    }

    a{
        text-decoration: none;
    }
`

const FifthList = styled.div`
    li{
        list-style-type: none;
        color: black;
        margin-bottom: 20px;
    }

    a{
        text-decoration: none;
    }
`

const SixthList = styled.div`
    li{
        list-style-type: none;
        color: black;
        margin-bottom: 20px;
    }

    a{
        text-decoration: none;
    }
`

const Buttons = styled.div`
    margin-top: 50px;
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

const Button3 = styled.div`
    display: flex;
    background-color: purple;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 150px;
    height: 40px;
    border-radius: 10px;
`
const NewList = styled.div`
    display: flex;
    margin-bottom: 50px;

    /* @media (max-width: 800px) {
        flex-wrap: wrap;
    } */
`

const SocialDiv = styled.div`
    display: flex;
    gap: 10px;
`

const IconDiv = styled.div`
    width: 25px;
    height: 25px;
    border: 1px solid purple;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: #f3daf3;
`

const SeventhList = styled.div`

    li{
        list-style-type: none;
    }
`

const EightList = styled.div`
    li{
        list-style-type: none;
    }
`

const NinthList = styled.div`
    li{
        list-style-type: none;
    }
`

const TenthList = styled.div`
    li{
        list-style-type: none;
    }
`

const EleventhList = styled.div`
    li{
        list-style-type: none;
    }
`

const FooterInfo = styled.div`
    display: flex;
    flex-direction: column;

    p{
        font-size: 12px;
        color: gray;
    }
`