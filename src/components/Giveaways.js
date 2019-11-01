import React, { useState } from "react";
import styled from "styled-components/macro";
import { Carousel } from "react-responsive-carousel";
import giveawayImages from "../images/giveaways";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Prize from "./Prize";
import giveawayContribs from "../data/giveawayContribs";
import SocialMediaLink from "./SocialMediaLink";
import { pick } from "lodash";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2,
  h3,
  h4 {
    margin: 0.75rem;
  }
`;

const updateDetails = (index, set) => {
  set(index);
};

export const Giveaways = () => {
  // useEffect(() => void fetchGiveaways(), [fetchGiveaways]);

  const [currentDetails, setDetails] = useState(0);

  // if (!Array.isArray(giveaways)) {
  //   return null;
  // }

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

// const mapStateToProps = state => {
//   return {
//     giveaways: state.giveaways
//   };
// };

// const mapDispatchToProps = {
//   fetchGiveaways: getGiveawaysAction
// };

export default Giveaways;
