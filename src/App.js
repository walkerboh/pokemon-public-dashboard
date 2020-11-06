import React from "react";
import logo from "./SmallWebLogo.png";
import styled from "styled-components";
import Donations from "./components/Donations";
import Summary from "./components/Summary";
import Twitch from "./components/Twitch";
import Giveaways from "./components/Giveaways";

const Header = styled.div`
  display: flex;
  background-color: #efefff;
  width: 100%;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  min-height: 170px;

  @media only screen and (min-width: 800px) {
    flex-direction: row;
  }

  img {
    max-width: 302px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  height: 82%;
  flex-wrap: wrap;
  justify-content: space-around;

  > div {
    width: 100%;
    text-align: center;

    @media only screen and (min-width: 800px) {
      width: 66%;

      :first-child {
        width: 33%;
      }
    }
  }
`;

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Header>
        <img src={logo} alt="Extra Life 2020" />
        <Summary />
        <Twitch />
      </Header>
      <Body>
        <Donations />
        <Giveaways />
      </Body>
    </div>
  );
}

export default App;
