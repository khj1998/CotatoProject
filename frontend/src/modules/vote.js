import { createAction, handleActions } from 'redux-actions';
import createRequestSaga,{
    createRequestActionTypes,
} from '../lib/createRequestSaga';

import * as votepostAPI from '../lib/api/votepost';
import { takeLatest } from 'redux-saga/effects';

// 액션 타입 정의

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';
// createRequestSaga 에서는 반복되는 부분을 함수화해서 정리해주기 위해서 createRequestActionTypes 사용해서 한번에 적음.
//투표 글 작성 관련
const [ VOTE_POST, VOTE_POST_SUCCESS, VOTE_POST_FAIlURE] = createRequestActionTypes('vote/VOTE_POST')

// 액션 생성 함수
export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD,({ key, value })=>({
    key,
    value
}));

export const votePost = createAction(VOTE_POST, ({title,content}) =>({
    title,
    content
}));

// saga 생성
const votePostSaga = createRequestSaga(VOTE_POST, votepostAPI.votePost);

export function* voteSaga(){
    yield takeLatest(VOTE_POST,votePostSaga);
}
// 초기 상태 정의
const initialState = {
    title:'',
    content: ''
};


// 리듀서 함수

const vote = handleActions(
    {
        [INITIALIZE]: state => initialState, // initialState 를 넣으면 초기 상태로 바뀜
        [CHANGE_FIELD] : (state,{payload: { key,value }}) =>({
            ...state,
            [key] : value, // 특정 key 값 업데이트
        }),
        [VOTE_POST]: state =>({
            ...state,
            // post, postError 초기화
            post:null,
            postError:null
        }),
        // post success
        [VOTE_POST_SUCCESS] : ( state, {payload : post}) =>({
            ...state,
            post
        }) ,
        //post fail
        [VOTE_POST_FAIlURE] : (state, {payload:postError}) =>({
            ...state,
            postError
        }) ,
    },
    initialState
)


export default vote;