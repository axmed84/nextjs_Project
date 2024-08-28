import React from 'react'
import PostForm from '../_components/PostForm'

const PostInfoPage = async ({ params }) => {

    const post = await fetch(`http://localhost:3000/api/post/${params.id}`, { cache: "no-store"})

    const postInfo = await post.json()
  
  return (
    <div>
     <PostForm postInfo={postInfo}/>
      </div>
  )
}

export default PostInfoPage