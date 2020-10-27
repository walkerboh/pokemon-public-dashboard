import {
  GET_DONATIONS_SUCCESS,
  GET_SUMMARY_SUCCESS,
  GET_TARGET_PRIZES_SUCCESS,
} from "./actions";

const initialState = {
  donations: [],
  targetPrizes: [],
  summary: {},
};

export const extraLife = (state = initialState, action) => {
  switch (action.type) {
    case GET_DONATIONS_SUCCESS:
      return {
        ...state,
        donations: action.payload,
      };
    case GET_SUMMARY_SUCCESS:
      return {
        ...state,
        summary: action.payload.summary,
      };
    case GET_TARGET_PRIZES_SUCCESS: {
      return {
        ...state,
        targetPrizes: action.payload.prizes,
      };
    }
    default:
      return state;
  }
};
