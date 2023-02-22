import { useEffect } from 'react'
import qs from 'qs'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import PostList from './PostList'
import { listPosts } from '../modules/posts'


const PostListContainer = ({ location, match }) => {
  const dispatch = useDispatch()
  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts?.posts,
      error: posts?.error,
      loading: loading?.['posts/LIST_POSTS'],
      user: user?.user,
    }),
  )

  useEffect(() => {
    const { username } = match.params
    const { tag, page } = qs.parse(location, {
      ignoreQueryPrefix: true,
    })

    dispatch(listPosts({ tag, username, page }))
  }, [dispatch, location])

  return (
    <PostList
      loading={loading}
      error={error}
      posts={posts}
      showWriteButton={user}
    />
  )
}

export default PostListContainer


