export const GET_GIVEAWAYS = "GET_GIVEAWAY_ACTIONS";
export const GET_GIVEAWAYS_SUCCESS = "GET_GIVEAWAY_ACTIONS_SUCCESS";

export const getGiveawaysAction = () => ({
  type: GET_GIVEAWAYS
});

export const getGiveawaysSuccessAction = payload => ({
  type: GET_GIVEAWAYS_SUCCESS,
  payload
});

export const FETCH_DONATION_STATUS = "FETCH_DONATION_STATUS";
export const FETCH_DONATION_STATUS_SUCCESS = "FETCH_DONATION_STATUS_SUCCESS";

export const fetchDonationsAction = () => ({
  type: FETCH_DONATION_STATUS
});

export const fetchDonationsSuccessAction = payload => ({
  type: FETCH_DONATION_STATUS_SUCCESS,
  payload
});

export const FETCH_POKEMON_STATUS = "FETCH_POKEMON_STATUS";
export const FETCH_POKEMON_STATUS_SUCCESS = "FETCH_POKEMON_STATUS_SUCCESS";

export const fetchPokemonStatusAction = () => ({
  type: FETCH_POKEMON_STATUS
});

export const fetchPokemonStatusSuccessAction = payload => ({
  type: FETCH_POKEMON_STATUS_SUCCESS,
  payload
});

export const FETCH_FACT = "FETCH_FACT";
export const FETCH_FACT_SUCCESS = "FETCH_FACT_SUCCESS";

export const fetchFactAction = () => ({
  type: FETCH_FACT
});

export const fetchFactSuccessAction = payload => ({
  type: FETCH_FACT_SUCCESS,
  payload
});
