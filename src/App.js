import React from "react";
import logo from "./ExtraLife2019Logo.png";
import styled from "styled-components/macro";
import Giveaways from "./components/Giveaways";
import DonationStatus from "./components/DonationStatus";
import Pokemon from "./components/Pokemon";
import Sidebar from "./components/Sidebar";

const Body = styled.div`
  width: 100%;
  border: 1px solid black;
  border-right: 0;
  border-bottom: 0;
`;

const Header = styled.div`
  display: flex;
  background-color: #efefff;

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

const CenterRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

function App() {
  return (
    <>
      <Header>
        <LogoImg src={logo} alt="Extra Life 2019" />
        <DonationStatus />
      </Header>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Body>
          <CenterRow>
            <Pokemon />
            <Giveaways />
          </CenterRow>
        </Body>
      </div>
    </>
  );
}

export default App;
