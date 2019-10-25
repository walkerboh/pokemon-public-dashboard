import { ofType } from "redux-observable";
import {
  switchMap,
  map,
  concatMap,
  distinctUntilChanged,
  withLatestFrom
} from "rxjs/operators";
import { interval } from "rxjs";
import {
  GET_GIVEAWAYS,
  getGiveawaysSuccessAction,
  FETCH_DONATION_STATUS,
  fetchDonationsSuccessAction,
  FETCH_POKEMON_STATUS,
  fetchPokemonStatusSuccessAction,
  FETCH_FACT,
  fetchFactSuccessAction
} from "./actions";
import { isEqual } from "lodash";

export const fetchGiveawaysEpic = (action$, _, { ajax }) =>
  action$.pipe(
    ofType(GET_GIVEAWAYS),
    switchMap(() => fetchGiveaways(ajax))
  );

export const getGiveawaysRepeatEpic = (action$, _, { ajax }) =>
  action$.pipe(
    ofType(GET_GIVEAWAYS),
    switchMap(() =>
      interval(1000 * 60 * 5).pipe(
        concatMap(() => fetchGiveaways(ajax)),
        distinctUntilChanged(isEqual)
      )
    )
  );

const fetchGiveaways = ajax =>
  ajax({
    url: "https://dystortion.tv/api/api/status/giveaways"
  }).pipe(map(({ response }) => getGiveawaysSuccessAction(response)));

export const fetchDonationsEpic = (action$, _, { ajax }) =>
  action$.pipe(
    ofType(FETCH_DONATION_STATUS),
    switchMap(() => fetchDonations(ajax))
  );

export const fetchDonationsRepeatEpic = (action$, _, { ajax }) =>
  action$.pipe(
    ofType(FETCH_DONATION_STATUS),
    switchMap(() =>
      interval(1000 * 60).pipe(
        concatMap(() => fetchDonations(ajax)),
        distinctUntilChanged(isEqual)
      )
    )
  );

const fetchDonations = ajax =>
  ajax({
    url: "https://dystortion.tv/api/api/status/donations"
  }).pipe(map(({ response }) => fetchDonationsSuccessAction(response)));

export const fetchPokemonStatusEpic = (action$, _, { ajax }) =>
  action$.pipe(
    ofType(FETCH_DONATION_STATUS),
    switchMap(() => fetchPokemonStatus(ajax))
  );

export const fetchPokemonStatusRepeatEpic = (action$, _, { ajax }) =>
  action$.pipe(
    ofType(FETCH_POKEMON_STATUS),
    switchMap(() =>
      interval(1000 * 60 * 2.5).pipe(
        concatMap(() => fetchPokemonStatus(ajax)),
        distinctUntilChanged(isEqual)
      )
    )
  );

const fetchPokemonStatus = ajax =>
  ajax({
    url: "https://dystortion.tv/api/api/status/pokemon"
  }).pipe(map(({ response }) => fetchPokemonStatusSuccessAction(response)));

export const fetchFactEpic = (action$, _, { ajax }) =>
  action$.pipe(
    ofType(FETCH_FACT),
    switchMap(() => fetchFact(ajax))
  );

export const fetchFactRepeatEpic = (action$, state$, { ajax }) => {
  return action$.pipe(
    ofType(FETCH_FACT),
    switchMap(() =>
      interval(1000 * 5).pipe(
        withLatestFrom(state$),
        concatMap(([_, { fact: { id } }]) => {
          return fetchFact(ajax, id);
        }),
        distinctUntilChanged(isEqual)
      )
    )
  );
};

const fetchFact = (ajax, id) => {
  const queryString = id ? `?id=${id}` : "";
  return ajax({
    url: `https://dystortion.tv/api/api/status/fact${queryString}`
  }).pipe(map(({ response }) => fetchFactSuccessAction(response)));
};
