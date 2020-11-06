import { ofType } from "redux-observable";
import {
  switchMap,
  map,
  concatMap,
  distinctUntilChanged,
} from "rxjs/operators";
import { interval } from "rxjs";
import {
  GET_DONATIONS,
  getDonationsSuccessAction,
  GET_SUMMARY,
  getSummarySuccessAction,
  GET_TARGET_PRIZES,
  getTargetPrizesSuccessAction,
  GET_TWITCH,
  getTwitchSuccessAction,
} from "./actions";
import { isEqual } from "lodash";

export const fetchSummaryEpic = (action$, _, { ajax }) =>
  action$.pipe(
    ofType(GET_SUMMARY),
    switchMap(() => fetchSummary(ajax))
  );

export const fetchSummaryRepeatEpic = (action$, _, { ajax }) =>
  action$.pipe(
    ofType(GET_SUMMARY),
    switchMap(() =>
      interval(1000 * 60).pipe(
        concatMap(() => fetchSummary(ajax)),
        distinctUntilChanged(isEqual)
      )
    )
  );

const fetchSummary = ajax =>
  ajax({
    url: "https://dystortion.tv/extralife/api/status/summary",
  }).pipe(map(({ response }) => getSummarySuccessAction(response)));

export const fetchDonationsEpic = (action$, _, { ajax }) =>
  action$.pipe(
    ofType(GET_DONATIONS),
    switchMap(() => fetchDonations(ajax))
  );

export const fetchDonationsRepeatEpic = (action$, _, { ajax }) =>
  action$.pipe(
    ofType(GET_DONATIONS),
    switchMap(() =>
      interval(1000 * 60).pipe(
        concatMap(() => fetchDonations(ajax)),
        distinctUntilChanged(isEqual)
      )
    )
  );

const fetchDonations = ajax =>
  ajax({
    url: "https://dystortion.tv/extralife/api/status/donations",
  }).pipe(map(({ response }) => getDonationsSuccessAction(response)));

export const fetchTargetPrizesEpic = (action$, _, { ajax }) =>
  action$.pipe(
    ofType(GET_TARGET_PRIZES),
    switchMap(() => fetchTargetPrizes(ajax))
  );

export const fetchTargetPrizesRepeatEpic = (action$, _, { ajax }) =>
  action$.pipe(
    ofType(GET_TARGET_PRIZES),
    switchMap(() =>
      interval(1000 * 60).pipe(
        concatMap(() => fetchTargetPrizes(ajax)),
        distinctUntilChanged(isEqual)
      )
    )
  );

const fetchTargetPrizes = ajax =>
  ajax({
    url: "https://dystortion.tv/extralife/api/status/prizes",
  }).pipe(map(({ response }) => getTargetPrizesSuccessAction(response)));

export const fetchTwitchEpic = (action$, _, { ajax }) =>
  action$.pipe(
    ofType(GET_TWITCH),
    switchMap(() => fetchTwitch(ajax))
  );

export const fetchTwitchRepeatEpic = (action$, _, { ajax }) =>
  action$.pipe(
    ofType(GET_TWITCH),
    switchMap(() =>
      interval(1000 * 60).pipe(
        concatMap(() => fetchTwitch(ajax)),
        distinctUntilChanged(isEqual)
      )
    )
  );

const fetchTwitch = ajax =>
  ajax({
    url: "https://dystortion.tv/extralife/api/status/streams",
  }).pipe(map(({ response }) => getTwitchSuccessAction(response)));
