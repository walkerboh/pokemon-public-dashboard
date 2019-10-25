import {
  GET_GIVEAWAYS_SUCCESS,
  FETCH_DONATION_STATUS_SUCCESS,
  FETCH_POKEMON_STATUS_SUCCESS,
  FETCH_FACT_SUCCESS
} from "./actions";

const initialState = {
  giveaways: {},
  donations: {},
  pokemon: {},
  fact: {}
};

export const efApp = (state = initialState, action) => {
  switch (action.type) {
    case GET_GIVEAWAYS_SUCCESS:
      return {
        ...state,
        giveaways: action.payload.giveaways
      };
    case FETCH_DONATION_STATUS_SUCCESS:
      return {
        ...state,
        donations: action.payload
      };
    case FETCH_POKEMON_STATUS_SUCCESS:
      return {
        ...state,
        pokemon: action.payload
      };
    case FETCH_FACT_SUCCESS:
      return {
        ...state,
        fact: action.payload.fact
      };
    default:
      return state;
  }
};
