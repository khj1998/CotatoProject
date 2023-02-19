import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
    createRequestActionTypes
} from "../lib/createRequestSaga";
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from "redux-saga/effects";

const INITIALIZE = 'write/INITIALIZE'; //게시글의 상태값을 초기화하도록하는 액션타입
const CHANGE_FIELD = 'write/CHANGE_FIELD'; //각 input의 변화되는 값을 저장하도록 하는 액션타입
const [ //게시글 저장을 위한 액션 타입
    WRITE_POST,
    WRITE_POST_SUCCESS,
    WRITE_POST_FAILURE,
] = createRequestActionTypes('write/WRITE_POST');

export const initialize = createAction(INITIALIZE); //initialize라는 변수명으로 액션을 생성하고, 해당 액션을 사용하면 write의 state값이 초기화됩니다.
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({ //changeField라는 변수명으로 액션을 생성하고 write의 변수들에 맞는 key, value값을 인자로 받아 저장하도록 합니다.
    key,
    value
}));
// writePost라는 이름으로 액션을 만들고, 게시글 저장에 필요한 값을 받아 저장함

export const writePost = createAction(WRITE_POST, ({
    userId,
    postType,
    category,
    rentalPrice,
    title,
    content,
    date,
    writer,
    images
}) => ({
    userId,
    postType,
    category,
    rentalPrice,
    title,
    content,
    date,
    writer,
    images
}));

const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.write); //액션 타입과 api 요청을 담아 사가를 생성합니다.
export function* writeSaga() {
    yield takeLatest(WRITE_POST, writePostSaga);
}

const initialState = {
    userId: '',
    postType: '',
    category: '',
    rentalPrice: null,
    title: '',
    content: '',
    date: null,
    writer: '',
    images: null,
    post: null,
    postError: null,
};

const write = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [CHANGE_FIELD]: (state, { payload: { key, value }}) => ({
            ...state,
            [key]: value,
        }),
        [WRITE_POST]: state => ({
            ...state,
            post: null,
            postError: null,
        }),
        [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
            ...state,
            post,
        }),
        [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
            ...state,
            postError,
        }),
    },
    initialState,
);

export default write;