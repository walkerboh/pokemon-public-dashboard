import React from "react";
import logo from "./SmallWebLogo.png";
import styled from "styled-components";
import Donations from "./components/Donations";

const Header = styled.div`
  display: flex;
  background-color: #efefff;
  height: 15%;

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  height: 85%;
  flex-wrap: wrap;
  justify-content: space-around;

  @media only screen and (min-width: 1000px) {
    > div {
      min-width: 500px;
      width: 33%;
      text-align: center;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 999px) {
    > div {
      width: 50%;
      text-align: center;
    }
  }
`;

const LogoImg = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const CenterRow = styled.div`
  display: flex;
  height: 100%;
  > div {
    width: 50%;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    overflow: auto;

    > div {
      width: 100;
    }
  }
`;

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Header>
        <div>
          <img src={logo} alt="Extra Life 2020" />
          <div>Stats</div>
        </div>
      </Header>
      <Body>
        <Donations />
        <div>Giveaways</div>
        <div>Prizes</div>
      </Body>
    </div>
  );
}

export default App;
