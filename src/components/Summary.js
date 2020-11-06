import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSummaryAction } from "../actions";
import styled from "styled-components";
import numbro from "numbro";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;

  > div {
    margin-bottom: 10px;
  }
`;

const numbroFormat = {
  thousandSeparated: true,
  average: false,
};

const Summary = ({ summary, fetchSummary }) => {
  useEffect(() => fetchSummary(), [fetchSummary]);

  return (
    <Container>
      <div>
        Total Donated:{" "}
        {numbro(summary.totalAmountDonated).formatCurrency({ ...numbroFormat })}
      </div>
      <div>
        Number of Donations:{" "}
        {numbro(summary.numberOfDonations).format({ ...numbroFormat })}
      </div>
      {summary.donationBlock && (
        <div>Current Donation Block: {summary.donationBlock}</div>
      )}
    </Container>
  );
};

const mapStateToProps = state => ({
  summary: state.summary,
});

const mapDispatchToProps = {
  fetchSummary: getSummaryAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
