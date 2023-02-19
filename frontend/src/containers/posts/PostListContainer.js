import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../../components/posts/PostList';
import { listPosts } from '../../modules/posts';
import { useEffect } from 'react';
import { useParams, useSearchParams  } from 'react-router-dom';


// withRouter 로 location 객체 접근 가능
const PostListContainer = () => {
  const {username} = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user.user,
    }),
  );

  useEffect(() => {
    //   location.search ? 뒤의 쿼리스트링을 값으로 하는 DOMstring.
    const tag = searchParams.get('tag');
    //page가 없으면 1을 기본값으로 사용
    const page = parseInt(searchParams.get('page'), 10) || 1;
    dispatch(listPosts({tag, username, page}));
  }, [dispatch, searchParams, username]);

  return (
    <PostList
      loading={loading}
      error={error}
      posts={posts}
    //   user 객체가 유효할 때 (user 객체는 현재 로그인 중인 사용자의 정보를 가지고 있음 .)
      showWriteButton={user}
    />
  );
};

export default PostListContainer;