import { Image, Logo, Nav, StyledHeader } from "./styles/Header.styled"
import { Container } from "./styles/Container.styled"
import { Button } from "./styles/Button.styled"
import React from 'react'
import { Flex } from "./styles/Flex.styled"

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src="./logo.svg" alt="" />
                    <Button>Try It Free</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>
                            Build the Community Your Fans WillLove
                        </h1>
                        <p>
                            Huddle re-imagines the way we build communities. you have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
                        </p>
                        <Button bg="#ff0099" color="#fff">
                            Get Started For Free
                        </Button>
                    </div>
                    <Image src="./illustration-mockups.svg" alt="" />
                </Flex>
            </Container>
        </StyledHeader>
    )
}

export default Header