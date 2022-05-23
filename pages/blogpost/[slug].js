// import React, { useState, useEffect } from 'react'
// import { useRouter } from 'next/router'
import parse from 'html-react-parser';
import moment from 'moment';
import { get_single_post, get_all_post } from '../../lib/api';
import SinglePost from '../../components/SinglePost';

const slug = ({singlePost}) => {
  // console.log(singlePost);
  // const [blogdata, setBlogdata] = useState(singlePost)
  // const router = useRouter();
  // const { slug } = router.query;
  // useEffect(() => {
  //   if(!router.isReady) return;
  //     const fetchData = async () => {
  //         const response = await fetch(`http://localhost/wordpress/wp-json/wp/v2/posts?slug=${slug}`)
  //         const data = await response.json()
  //         setBlogdata(data)
  //     }
  //     fetchData()
  // }, [router.isReady])
  // console.log(blogdata);
    
  return (
    <div className='container w-full md:max-w-4xl mx-auto pt-2 slug-main'>
      {/* {blogdata && blogdata.map((element)=>{
        let formattedTime = moment(element.date).format('ddd MMM DD YYYY');
        return <div key={element.id} className='w-full px-4 md:px-6 text-xl text-gray-800 leading-normal '>
           <div className='font-sans'>
           <h1 className=" font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{element.slug}</h1>
           <p className="text-sm md:text-base font-normal text-gray-600 pb-6">Published {formattedTime}</p>
           </div>
           { parse(`<p>${ element.content.rendered}</p>`)}
           <div className="mb-8"></div>
        </div>
      })} */}
      <SinglePost singlePost={singlePost}/>
    </div>
  )
}

export async function getStaticPaths() {
  const allPosts = await get_all_post();
  const paths = allPosts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });
  return {
    paths,
    fallback: false// false or 'blocking'
  };
}


export async function getStaticProps(context) {
  const slug  = context.params.slug;
      let singlePost = null
       singlePost = await get_single_post(slug)
  return {
    props: {singlePost},
    revalidate: 5,
  }
}





export default slug