export const GET_SUMMARY = "GET_SUMMARY";
export const GET_SUMMARY_SUCCESS = "GET_SUMMARY_SUCCESS";

export const GET_DONATIONS = "GET_DONATIONS";
export const GET_DONATIONS_SUCCESS = "GET_DONATIONS_SUCCESS";

export const GET_TARGET_PRIZES = "GET_TARGET_PRIZES";
export const GET_TARGET_PRIZES_SUCCESS = "GET_TARGET_PRIZES_SUCCESS";

export const GET_TWITCH = "GET_TWITCH";
export const GET_TWITCH_SUCCESS = "GET_TWITCH_SUCCESS";

export const getSummaryAction = () => ({
  type: GET_SUMMARY,
});

export const getSummarySuccessAction = payload => ({
  type: GET_SUMMARY_SUCCESS,
  payload,
});

export const getDonationsAction = () => ({
  type: GET_DONATIONS,
});

export const getDonationsSuccessAction = payload => ({
  type: GET_DONATIONS_SUCCESS,
  payload,
});

export const getTargetPrizesAction = () => ({
  type: GET_TARGET_PRIZES,
});

export const getTargetPrizesSuccessAction = payload => ({
  type: GET_TARGET_PRIZES_SUCCESS,
  payload,
});

export const getTwitchAction = () => ({
  type: GET_TWITCH,
});

export const getTwitchSuccessAction = payload => ({
  type: GET_TWITCH_SUCCESS,
  payload,
});
