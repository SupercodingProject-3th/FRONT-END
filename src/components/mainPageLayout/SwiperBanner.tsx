import React, { Component } from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

interface BannerProps {
  data: { url: string; title: string }[];
  // NOTE: 다른 필요한 props도 여기에 추가 가능
}

export default class Banner extends Component<BannerProps> {
  render() {
    return (
      <Header>
        <LogoBox>
          <LogoBoxStart>
            <Logo
              src="https://www.wanderon.in/wanderon-logo.svg"
              alt="Logo"
            />
          </LogoBoxStart>

          <LogoBoxMid>
            <img src="https://www.wanderon.in/svg/nav/phone.svg" alt="phone" />
            <PhoneNumber>+91-8887756502</PhoneNumber>
          </LogoBoxMid>

          <LogoBoxLast>
            <h1>TRENDING TRIPS</h1>
            <h1>WORKCATIONS</h1>
            <h1>BLOGS</h1>
          </LogoBoxLast>
        </LogoBox>

        <HeaderTextBox>
          <h1>India's Coolest Travel Community</h1>
          <p>
            <Typewriter
              options={{
                strings: [
                  " Spreading Happiness",
                  " Connecting People",
                  " Creating Memories",
                  " Creating Stories",
                  " Fulfilling Adventure",
                ],
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hello")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(1000)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </p>

          <TextBoxInputContainer>
            <Input placeholder="Where do you wanna go?" />
            <InputContainerImgContainer>
              <img src="https://www.wanderon.in/svg/search.svg" alt="phone" />
            </InputContainerImgContainer>
          </TextBoxInputContainer>

          <HeaderTextCardContainer>
            {/* card */}
            <CardContainerInner>
              <CardContainerInner>
                {this.props.data.map(
                  (item: { url: string; title: string }, index: number) => {
                    return (
                      <CardContainerInnerCard
                        key={index}
                      >
                        <img src={item.url} alt="item" />
                        <h1>5000+</h1>
                        <h1>{item.title}</h1>
                      </CardContainerInnerCard>
                    );
                  }
                )}
              </CardContainerInner>
            </CardContainerInner>
          </HeaderTextCardContainer>
        </HeaderTextBox>
      </Header>
    );
  }
}

const Header = styled.header`

`;

const LogoBox = styled.div`

`;

const LogoBoxStart = styled.div`

`;

const Logo = styled.img`

`;

const LogoBoxMid = styled.div`

`;

const PhoneNumber = styled.h1`

`;

const LogoBoxLast = styled.div`

`;

const HeaderTextBox = styled.div`

`;

const HeaderText = styled.h1`

`;

const TextBoxInputContainer = styled.div`

`;

const Input = styled.input`

`;

const InputContainerImgContainer = styled.div`

`;

const HeaderTextCardContainer = styled.div`

`;

const CardContainerInner = styled.div`

`;

const CardContainerInnerCard = styled.div`
 
`;
