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
    url: "https://localhost:44369/api/status/summary",
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
    url: "https://localhost:44369/api/status/donations",
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
    url: "https://localhost:44369/api/status/prizes",
  }).pipe(map(({ response }) => getTargetPrizesSuccessAction(response)));
