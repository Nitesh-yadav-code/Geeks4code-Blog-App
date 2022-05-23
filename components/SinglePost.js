import React from 'react'

function SinglePost({singlePost}) {
  return (
    <div>This is single post
             <h1>{singlePost.title.rendered}</h1>
    </div>
  )
}

export default SinglePost