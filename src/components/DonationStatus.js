import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchDonationsAction } from "../actions";
import styled from "styled-components/macro";
import numbro from "numbro";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-weight: bold;
  }
`;

const DonationStatus = ({ donations, fetchDonations }) => {
  useEffect(() => void fetchDonations(), [fetchDonations]);

  const numbroFormat = {
    thousandSeparated: true,
    average: false
  };

  return (
    <Container>
      <div>
        <span>Number of Donations: </span>
        {numbro(donations.numberOfDonations).format(numbroFormat)}
      </div>
      <div>
        <span>Total Amount Donated: </span>
        {numbro(donations.totalAmountDonated).formatCurrency(numbroFormat)}
      </div>
      <div>
        <span>Donation Goal: </span>
        {numbro(donations.donationGoal).formatCurrency(numbroFormat)}
      </div>
    </Container>
  );
};

const mapStateToProps = state => ({
  donations: state.donations
});

const mapDispatchToProps = {
  fetchDonations: fetchDonationsAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonationStatus);
