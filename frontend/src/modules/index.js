import {combineReducers} from "redux";
import {all} from 'redux-saga/effects';
import auth, {authSaga} from './auth';
import loading from './loading';
import user, {userSaga} from './user';
import write, {writeSaga} from './write';
import post, {postSaga} from './post';
import posts, {postsSaga} from './posts';
import writeComment, {writeCommentSaga} from "./writeComment";

const rootReducer = combineReducers({
    //loading,
    auth,
    user,
    write,
    post,
    posts,
    writeComment
},
);

export function* rootSaga() {
yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga(), writeCommentSaga()]);
}
export default rootReducer;