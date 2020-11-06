import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getTargetPrizesAction } from "../actions";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { blockA, blockB, grandPrize } from "../images";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;

    @media only screen and (min-width: 800px) {
      width: 50%;
    }
  }

  .carousel-root .carousel .slide {
    background: none;
  }
`;

const GrandContainer = styled.div`
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const SecretContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    padding: 10px;
    width: 70%;
    box-sizing: border-box;

    :not(:last-child) {
      border-bottom: 1px solid black;
    }

    h4 {
      margin: 0;
    }
  }
`;

const ColoredSpan = styled.div`
  color: ${props => props.color || "black"};
`;

const Giveaways = ({ secretPrizes, fetchSecretPrizes }) => {
  useEffect(() => fetchSecretPrizes(), [fetchSecretPrizes]);

  return (
    <Container>
      <div>
        <h3>Donation Block A</h3>
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={true}
        >
          {Object.keys(blockA).map(g => (
            <div key={g}>
              <img src={blockA[g]} alt={g} />
            </div>
          ))}
        </Carousel>
      </div>
      <div>
        <h3>Donation Block B</h3>
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={true}
        >
          {Object.keys(blockB).map(g => (
            <div key={g}>
              <img src={blockB[g]} alt={g} />
            </div>
          ))}
        </Carousel>
      </div>
      <GrandContainer>
        <h3>Grand Prize</h3>
        <img src={grandPrize["grand"]} alt="Grand Prize" />
      </GrandContainer>
      <SecretContainer>
        <h3>Secret Donation Prizes</h3>
        {secretPrizes.map(sp => (
          <div>
            <h4>{sp.name}</h4>
            <ColoredSpan color={sp.claimed ? "red" : "green"}>
              {sp.claimed ? "Claimed" : "Available"}
            </ColoredSpan>
          </div>
        ))}
      </SecretContainer>
    </Container>
  );
};

const mapStateToProps = state => ({ secretPrizes: state.targetPrizes });

const mapDispatchToProps = {
  fetchSecretPrizes: getTargetPrizesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Giveaways);
