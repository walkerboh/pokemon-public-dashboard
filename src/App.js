import React from "react";
import logo from "./ExtraLife2019Logo.png";
import styled from "styled-components/macro";
import Giveaways from "./components/Giveaways";
import DonationStatus from "./components/DonationStatus";
import Pokemon from "./components/Pokemon";

const Body = styled.div`
  margin: 0 20%;
`;

const Header = styled.div`
  display: flex;

  > div {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const LogoImg = styled.img`
  height: 150px;
`;

function App() {
  return (
    <Body>
      <Header>
        <LogoImg src={logo} alt="Extra Life 2019" />
        <div>
          <a href="https://twitch.tv/dystortion">Watch the stream!</a>
          <a href="https://www.extra-life.org/participant/dystortion">
            Donate!
          </a>
        </div>
      </Header>
      <DonationStatus />
      <Pokemon />
      <Giveaways />
    </Body>
  );
}

export default App;
