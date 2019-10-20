import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components/macro";
import { getGiveawaysAction } from "../actions";
import { Carousel } from "react-responsive-carousel";

const PlaceholderDiv = styled.div`
  height: 500px;
  width: 400px;
  border: 1px solid black;
`;

export const Giveaways = ({ giveaways, fetchGiveaways }) => {
  useEffect(() => void fetchGiveaways(), [fetchGiveaways]);

  return <PlaceholderDiv>This will be the carousel</PlaceholderDiv>;
};

const mapStateToProps = state => {
  return {
    giveaways: state.giveaways
  };
};

const mapDispatchToProps = {
  fetchGiveaways: getGiveawaysAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Giveaways);
