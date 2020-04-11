import * as actionTypes from './actionTypes';
import axios from 'axios';

export function getShowsSuccess(shows) {
  return {type: actionTypes.GET_SHOWS_SUCCESS, payload: shows};
}

export function getShows(query) {
  return async function(dispatch) {
    await axios
      .get(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then(data => dispatch(getShowsSuccess(data.data)))
      .catch(err => {
        console.log(err);
        return null;
      });
  };
}

export function selectShow(show) {
  console.log('VOLKAN: selectShow -> show', show);
  return {type: actionTypes.SELECT_SHOW, payload: show};
}
