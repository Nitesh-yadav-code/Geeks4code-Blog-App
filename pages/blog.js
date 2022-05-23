import React, { useState, useEffect } from 'react'
import {get_all_post} from '../lib/api'
import Link from 'next/link'
import parse from 'html-react-parser';
import moment from 'moment';
import Image from 'next/image'
function blog(props) {
    const [blogdata, setBlogdata] = useState(props.allPosts)

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('http://localhost/wordpress/wp-json/wp/v2/posts')
    //         const data = await response.json()
    //         setBlogdata(data)
    //     }
    //     fetchData()
    // }, [])
    return (

        <div className='md:mx-[5%]'>
            <h2 className='text-3xl my-3 mx-5 text-slate-600'>CoderNitesh Blog</h2>
            <div className='  flex space-x-2 flex-wrap'>
            {blogdata && blogdata.map((element) => {
                let formattedTime = moment(element.date).format(' MMM DD YYYY');
                return <div key={element.id} className='p-6 w-[100%] md:w-[70%] lg:w-[370px] '>
                <div className="w-[100%]">
                {element.yoast_head_json.og_image ? (
                <Image
                  src={element.yoast_head_json.og_image["0"].url}
                  width={400}
                  height={300}
                  alt="thumnail"
                  className=" rounded-lg lg:h-full lg:w-full h-full absolute "
                />
              ) : (
                ""
              )}
                </div>
                 <div className='content py-3'>
                     <div className="category flex space-x-5 ">
                         <p className='bg-green-700 text-white py-1 rounded px-4'>JavaScript</p>
                         <p className='mt-1'>{formattedTime}</p>
                     </div>
                     <Link href={`/blogpost/${element.slug}`}>
                        <h2 className='text-3xl py-1 cursor-pointer'>{element.title.rendered}
                        </h2>
                    </Link>
                     <div className='mt-2 line-clamp-3 cursor-pointer'>{ parse(`<p>${ element.content.rendered}</p>`)}
                     </div>
                 </div>
                 <Link href={`/blogpost/${element.slug}`}>
                 <a className='cursor-pointer hover:text-green-900 transition-all duration-300'>Read More</a>
                    </Link>
             
             </div>
            })}
         
            </div>
        </div>
    )
}
export default blog;

export async function getStaticProps() {
    const allPosts = await get_all_post();
  
    return {
      props: { allPosts},
    };
  }
  