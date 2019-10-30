import React from "react";
import styled from "styled-components/macro";
import Fact from "./Fact";

const SidebarContainer = styled.div`
  width: 20%;
  background-color: #efefff;
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  justify-content: space-between;
  text-align: center;

  div:first-child > * {
    margin-top: 10px;
  }
`;

const Sidebar = () => (
  <SidebarContainer>
    <div>
      <div>
        Welcome to Extra Life 2019! We are streaming in support of the
        Children's Hospital of Philadelphia from November 2nd @ 11am until the
        3rd @ 11 am.
      </div>
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
    </div>
    <div>If something goes wrong with this page, please yell at Evan.</div>
  </SidebarContainer>
);

export default Sidebar;
