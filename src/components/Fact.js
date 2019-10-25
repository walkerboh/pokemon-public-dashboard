import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFactAction } from "../actions";

const Fact = ({ fact, fetchFact }) => {
  useEffect(() => void fetchFact(), [fetchFact]);

  if (!fact) {
    return null;
  }

  return (
    <div>
      Did you know?<div>{fact.text}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  fact: state.fact
});

const mapDispatchToProps = {
  fetchFact: fetchFactAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fact);
