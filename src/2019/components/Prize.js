import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPrizeAction } from "../actions";
import styled from "styled-components/macro";
import popupContribs from "../data/popupContribs";
import SocialMediaLink from "./SocialMediaLink";
import { pick } from "lodash";

const OuterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: indianred;
  border: 5px solid maroon;
  border-radius: 30px;
  margin-top: 5px;

  h4 {
    width: 25%;
  }

  h3,
  h4 {
    margin: 0.75rem;
  }
`;

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

  const prizeDetails = popupContribs[prize.name];

  const social = pick(prizeDetails, [
    "etsy",
    "twitter",
    "instagram",
    "facebook",
    "website"
  ]);

  return (
    <OuterContainer>
      <PrizeContainer>
        <h3>Limited Time Prize!</h3>
        <div>Prize: {prizeDetails.prize}</div>
        <div>Contributor: {prizeDetails.name}</div>
        <div>
          {Object.keys(social).map(s => (
            <SocialMediaLink key={s} type={s} value={social[s]} />
          ))}
        </div>
      </PrizeContainer>
      <h4>Donate now to be entered to win this extra prize.</h4>
    </OuterContainer>
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
