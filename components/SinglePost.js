import React from 'react'
import Content from './Content';
import Thumbnail from './Thumbnail'

function SinglePost({ singlePost }) {
  console.log(singlePost);
  return (
    <div className='container my-4'>
      <div className="title mb-4 px-3">
      <h1 className='text-4xl font-extrabold'>{singlePost.title.rendered}</h1>
      </div>
      <div className="thumbnail mx-auto w-80 md:w-auto md:mx-40 h-auto">
        {singlePost.yoast_head_json.og_image ? (

           <Thumbnail imageUrl={singlePost.yoast_head_json.og_image["0"].url}/> 
        ) : (
          "")}
      </div>
      <br />
      <div className="post-content px-3 md:text-[18px]">
        <Content  content={singlePost.content.rendered}/>
      </div>
    </div>
  )
}

export default SinglePost