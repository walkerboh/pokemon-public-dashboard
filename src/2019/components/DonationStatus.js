import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchDonationsAction } from "../actions";
import styled from "styled-components/macro";
import numbro from "numbro";
import { random } from "lodash";

const noCommentMsgs = [
  "They were too busy to leave a comment.",
  "They were too entertained by the stream to comment.",
  "This comment was delayed in the mail.",
  "Pika Pika",
  "ERROR 404 - Comment Not Found",
  "ERROR 500 - Internal Comment Error",
  "This is not the comment you are looking for.",
  "Donating is rad - Chase 2019",
  "Eat. Sleep. Donate. Repeat.",
  "This donation was a no joke amount of American dollars for the big beautiful children."
];

const NoComment = styled.span`
  font-style: italic;
`;

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15%;

  @media screen and (max-width: 1100px) {
    padding: 0 2%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  span {
    font-weight: bold;
  }
`;

const DonationContainer = styled.div`
  display: flex;
  width: 100%;

  > div:first-child {
    width: 25%;
  }

  > div:last-child {
    width: 75%;
  }
`;

const DonationStatus = ({ donations, fetchDonations }) => {
  useEffect(() => void fetchDonations(), [fetchDonations]);

  const numbroFormat = {
    thousandSeparated: true,
    average: false
  };

  return (
    <OuterContainer>
      <Container>
        <div>
          <span>Donation Goal: </span>
          {numbro(donations.donationGoal).formatCurrency(numbroFormat)}
        </div>
        <div>
          <span>Total Amount Donated: </span>
          {numbro(donations.totalAmountDonated).formatCurrency(numbroFormat)}
        </div>
        <div>
          <span>Number of Donations: </span>
          {numbro(donations.numberOfDonations).format({
            thousandSeparated: true,
            average: false
          })}
        </div>
      </Container>
      {donations.latestDonation && (
        <DonationContainer>
          <div>
            <div>Most Recent Donation</div>
            <div>{donations.latestDonation.donor}</div>
            <div>
              {numbro(donations.latestDonation.amount).formatCurrency()}
            </div>
          </div>
          <div>
            <div>Comment</div>
            <div>
              {donations.latestDonation.message || (
                <NoComment>{noCommentMsgs[random(0, 9)]}</NoComment>
              )}
            </div>
          </div>
        </DonationContainer>
      )}
    </OuterContainer>
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
