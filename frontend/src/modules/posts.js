import { createAction, handleActions } from 'redux-actions';

    import createRequestSaga, {
      createRequestActionTypes,
    } from '../lib/createRequestSaga';

    import * as postsAPI from '../lib/api/posts';
    import { takeLatest } from 'redux-saga/effects';

    // 액션 타입 정의
    const [LIST_POSTS, LIST_POSTS_SUCCESS, LIST_POSTS_FAILURE] =
      createRequestActionTypes('POSTS/LIST_POSTS');

    // 액션 생성 함수
    export const listPosts = createAction(
      LIST_POSTS,
      ({ tag, username, page }) => ({ tag, username, page }),
    );

    // 사가 생성
    const listPostsSaga = createRequestSaga(LIST_POSTS, postsAPI.listPosts);
    export function* postsSaga() {
      yield takeLatest(LIST_POSTS, listPostsSaga);
    }

    //초기 상태 설정

    const initialState = {
      posts: null,
      error: null,
      lastPage: 1,
    };

    // 리듀서 함수

    const posts = handleActions(
      {
        [LIST_POSTS_SUCCESS]: (state, { payload: posts }) => ({
          ...state,
          posts,
          lastPage: parseInt(response.headers['last-page'], 10), //문자열을 숫자로 변환함
        }),
        [LIST_POSTS_FAILURE]: (state, { payload: error }) => ({
          ...state,
          error,
        }),
      },
      initialState,
    );

    export default posts;