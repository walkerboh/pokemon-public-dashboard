import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components/macro";
import { getGiveawaysAction } from "../actions";
import { Carousel } from "react-responsive-carousel";
import giveawayImages from "../images/giveaways";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Prize from "./Prize";
import giveawayContribs from "../data/giveawayContribs";
import {
  Etsy,
  Facebook,
  Instagram,
  Twitter,
  Website
} from "../images/socialMedia";
import { pick } from "lodash";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const updateDetails = (index, set) => {
  set(index);
};

export const Giveaways = ({ giveaways, fetchGiveaways }) => {
  useEffect(() => void fetchGiveaways(), [fetchGiveaways]);

  const [currentDetails, setDetails] = useState(0);

  if (!Array.isArray(giveaways)) {
    return null;
  }

  const name = Object.keys(giveawayImages)[currentDetails];
  const details = giveawayContribs[name];

  return (
    <Container>
      <Prize />
      <h2>Giveaways</h2>
      <h4>View all the available giveaways during the stream!</h4>
      <Carousel
        showArrows={true}
        width={"394px"}
        height={"438px"}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        selectedItem={currentDetails}
        onChange={index => updateDetails(index, setDetails)}
      >
        {Object.keys(giveawayImages).map(g => (
          <div key={g}>
            <img src={giveawayImages[g]} alt={g} />
          </div>
        ))}
      </Carousel>
      {details && (
        <div>
          <h4>Contributors</h4>
          {details.map((d, ind) => (
            <ContributorDetails key={ind} details={d} />
          ))}
        </div>
      )}
    </Container>
  );
};

const ContributorDetails = ({ details }) => {
  if (!details) {
    return null;
  }

  const social = pick(details, [
    "etsy",
    "twitter",
    "instagram",
    "facebook",
    "website"
  ]);

  return (
    <div>
      <div>
        {details.prize} - {details.name}
      </div>
      <div>
        {Object.keys(social).map(s => (
          <SocialMediaLink key={s} type={s} value={social[s]} />
        ))}
      </div>
    </div>
  );
};

const SocialMediaLink = ({ type, value }) => {
  let link;

  switch (type) {
    case "etsy":
      link = (
        <a
          href={`https://www.etsy.com/shop/${value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Etsy} alt="Etsy" width={20} height={20} />
        </a>
      );
      break;
    case "twitter":
      link = (
        <a
          href={`https://twitter.com/${value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Twitter} alt="Twitter" />
        </a>
      );
      break;
    case "facebook":
      link = (
        <a
          href={`https://www.facebook.com/${value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Facebook} alt="Facebook" />
        </a>
      );
      break;
    case "instgram":
      link = (
        <a
          href={`https://www.instagram.com/${value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Instagram} alt="Instagram" />
        </a>
      );
      break;
    case "website":
      link = (
        <a href={value} target="_blank" rel="noopener noreferrer">
          <img src={Website} alt="Website" width={20} height={20} />
        </a>
      );
      break;
    default:
      return null;
  }

  return <span style={{ marginRight: "5px" }}>{link}</span>;
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
