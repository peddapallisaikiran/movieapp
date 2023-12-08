import { delay, put, all, takeLatest, call  } from "@redux-saga/core/effects";
import { API_KEY } from "../config"
import TheMovieDbApi from "../lib/api"

import { fetchedSearchMovies, searchMovies } from "../redux/search"

const api = new TheMovieDbApi(API_KEY);

function* fetchSearchMovies(action){
    yield delay(500);

    yield put(
        fetchedSearchMovies(yield call(api.searchMovies, action.payload))
    )
}

export default function* watcherSaga(){
    yield all([
        yield takeLatest(searchMovies.type, fetchSearchMovies)
    ])
}