import React from "react";
import styled from "styled-components/macro";
import Fact from "./Fact";

const SidebarContainer = styled.div`
  width: 20%;
  background-color: #efefff;
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  align-items: center;

  > * {
    margin-top: 10px;
    text-align: center;
  }
`;

const Sidebar = () => (
  <SidebarContainer>
    <span>
      Welcome to Extra Life 2019! We are streaming in support of the Children's
      Hospital of Philadelphia from November 2nd @ 11am until the 3rd @ 11 am.
    </span>
    <div>
      <a href="https://twitch.tv/dystortion">Watch the stream!</a>
    </div>
    <div>
      <a href="https://www.extra-life.org/participant/dystortion">Donate!</a>
    </div>
    <div>
      <a href="https://www.extra-life.org">Learn more about Extra Life!</a>
    </div>
    <Fact />
  </SidebarContainer>
);

export default Sidebar;
