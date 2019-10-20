import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGiveawaysAction } from "../actions";
import { Carousel } from "react-responsive-carousel";

export const Giveaways = ({ giveaways, fetchGiveaways }) => {
  useEffect(() => void fetchGiveaways(), [fetchGiveaways]);

  return <span>{giveaways && giveaways.length}</span>;
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
