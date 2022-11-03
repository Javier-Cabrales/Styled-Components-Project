import { Container } from "./styles/Container.styled";
import { StyledFooter } from "./styles/Footer.styled"
import { Flex } from './styles/Flex.styled'
import React from 'react'
import SocialIcons from "./SocialIcons";

function Footer() {
    return (
        <>
            <StyledFooter>
                <Container>
                    <img src="./logo_white.svg" alt="logo" />
                    <Flex>
                        <ul>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium illum temporibus rerum, excepturi exercitationem nam!
                            </li>
                            <li>+1-543-123-4567</li>
                            <li>example@gmail.com</li>
                        </ul>
                        <ul>
                            <li>About Us</li>
                            <li>What we Do</li>
                            <li>FAQ</li>
                        </ul>
                        <ul>
                            <li>Carrer</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                        <SocialIcons />
                    </Flex>
                    <p>&copy; 2022 Hunddle. All rights reserved</p>
                </Container>
            </StyledFooter>
        </>
    )
}

export default Footer