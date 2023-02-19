import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as votepostAPI from '../lib/api/votepost';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'vote/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'vote/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [
    VOTE_POST
] = createRequestActionTypes('votecreate/VOTE_POST'); // 포스트 작성

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
    key,
    value,
}));
export const votePost = createAction(VOTE_POST, ({ title, place }) => ({
    title,
    place,
}));

// 사가 생성
const votePostSaga = createRequestSaga(VOTE_POST, votepostAPI.votePost);
export function* voteSaga() {
    yield takeLatest(VOTE_POST, votePostSaga);
}

const initialState = {
    title: '',
    place: '',
};

const vote = handleActions(
    {
        [INITIALIZE]: state => initialState, // initialState를 넣으면 초기 상태로 바뀜
        [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value, // 특정 key 값을 업데이트
        }),
        [VOTE_POST]: state => ({
            ...state,
            // post와 postError를 초기화
            post: null,
            postError: null,
        }),

    },
    initialState,
);

export default vote;