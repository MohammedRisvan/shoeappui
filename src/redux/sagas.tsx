import { call,put,takeEvery } from "redux-saga/effects";
import { GET_USERS_Fetch,GET_USERS_SUCCESS } from "./actions";

function usersFetch(){
    return fetch("https://jsonplaceholder.typicode.com/users").then(responce=>responce.json())
}

function* workGetUsersFetch(){
    const users = yield call(usersFetch);
    yield put({type:GET_USERS_SUCCESS,users})
}


function* mySaga(){
    yield takeEvery(GET_USERS_Fetch,workGetUsersFetch)
}
export default mySaga