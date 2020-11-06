import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDonationsAction } from "../actions";
import styled from "styled-components";
import numbro from "numbro";
import { random } from "lodash";

const Donation = styled.div`
  border-top: 1px solid gray;
  width: 90%;

  > div {
    margin-bottom: 8px;
  }

  span:first-child {
    margin-right: 20px;
  }
`;

const numbroFormat = {
  thousandSeparated: true,
  average: false,
};

const Donations = ({ donations, fetchDonations }) => {
  useEffect(() => void fetchDonations(), [fetchDonations]);

  return (
    <div>
      <div style={{ marginTop: "10px" }}>
        <a href="https://docs.google.com/spreadsheets/d/179DgnzuPCGgLhTErOpfeCRHVtR8ZA331WT5opAt3Lis/edit#gid=0">
          Click here for the schedule!
        </a>
      </div>
      <h3>Donations</h3>
      <div
        style={{
          "overflow-y": "auto",
          height: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {donations &&
          donations.map(d => (
            <Donation key={d.id}>
              <div>
                <span>{d.donor}</span>
                <span>
                  {numbro(d.amount).formatCurrency({ ...numbroFormat })}
                </span>
              </div>
              <div>{d.message}</div>
            </Donation>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  donations: state.donations,
});

const mapDispatchToProps = {
  fetchDonations: getDonationsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Donations);
