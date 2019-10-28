import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPrizeAction } from "../actions";
import styled from "styled-components/macro";

const PrizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Prize = ({ prize, fetchPrize }) => {
  useEffect(() => void fetchPrize(), [fetchPrize]);

  if (!prize) {
    return null;
  }

  return (
    <PrizeContainer>
      <h3>Limited Time Prize!</h3>
      <div>Prize: {prize.name}</div>
      <div>Contributor: {prize.contributor}</div>
      <h4>Donate now to be entered to win this extra prize.</h4>
    </PrizeContainer>
  );
};

export const mapStateToProps = state => ({
  prize: state.prize
});

export const mapDispatchToProps = {
  fetchPrize: fetchPrizeAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Prize);
