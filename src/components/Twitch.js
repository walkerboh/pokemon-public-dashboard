import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTwitchAction } from "../actions";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
  }
`;

const Twitch = ({ twitch, fetchTwitch }) => {
  useEffect(() => void fetchTwitch(), [fetchTwitch]);

  const live = (twitch || []).filter(s => s.live);

  return (
    <Container>
      <h4>Now Live:</h4>
      {live.length > 0 ? (
        live.map(s => (
          <div>
            <div>
              {s.name} - {s.game}
            </div>
            <div>
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                Watch Now!
              </a>
            </div>
          </div>
        ))
      ) : (
        <span>Come back soon!</span>
      )}
    </Container>
  );
};

const mapStateToProps = state => ({
  twitch: state.twitch,
});

const mapDispatchToProps = {
  fetchTwitch: getTwitchAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Twitch);
