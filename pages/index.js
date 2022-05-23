import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { get_most_recent_post, get_all_post } from '../lib/api'
export default function Home({ mostRecentPost, allPost }) {
  
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="main" className="main-card">
        <div className="recent-post container">
          <div className="post-padding pt-14 pb-2 ">
            <div className="all-contents md:flex pb-14">
              <div className="rigth-content text-white   md:pl-28 pl-8 overflow-x-hidden">
                <div className="post-writer flex items-center space-x-3">
                  <img className="w-8 h-8 rounded-full" src="assets/img-2.jpg" alt="" />
                  <p className="text-sm tracking-wider ">Nitesh Yadav</p>
                </div>
                <div className="titles py-8 md:text-2xl w-[90%] md:w-[80%] hover:underline cursor-pointer">
                  <Link href={`/blogpost/${mostRecentPost.slug}`}>
                  <h3 className="title">{mostRecentPost.title.rendered}</h3>
                    </Link>
                </div>
                <div className="time-date flex items-center md:space-x-8 text-xs space-x-4">
                  <div className="topic flex space-x-4 py-2">
                    <p className="bg-red-800 py-1 px-3 text-xsm rounded-full tracking-wider">Featured</p>
                    <p className="bg-slate-600  py-1 px-3 text-xsm rounded-full tracking-wider">Company</p>
                  </div>
                  <div className="date flex space-x-3 py-2">
                    <p className="text-xsm tracking-wider">May 12, 2022</p>
                    <p className="text-xsm tracking-wider">11 minutes</p>
                  </div>
                </div>
              </div>
              <div className="left-content flex  h-fit space-x-4 md:space-x-0 overflow-hidden md:ml-20 mt-6 md:block">
                {/* <img className="h-[8em] w-[24em] md:w-[40em] md:h-[16em] rounded-sm -ml-16  md:-ml-0 " src="assets/img-2.jpg" alt=""/> */}
                <div className="h-[8em] w-[24em] md:w-[40em] md:h-[16em] rounded-sm  relative">
                  {mostRecentPost.yoast_head_json.og_image ? (
                    <>
                      <Image
                        src={mostRecentPost.yoast_head_json.og_image["0"].url}
                        layout="fill" // required
                        objectFit="cover" // change to suit your needs
                        alt="thumnail"
                        className='-ml-16  md:-ml-0'
                      />
                      <Image
                        src={mostRecentPost.yoast_head_json.og_image["0"].url}
                        layout="fill" // required
                        objectFit="cover" // change to suit your needs
                        alt="thumnail"
                        className='h-[8em] w-[24em] md:w-[40em] md:h-[16em] rounded-sm md:my-4 '
                      />
                      <Image
                        src={mostRecentPost.yoast_head_json.og_image["0"].url}
                        layout="fill" // required
                        objectFit="cover" // change to suit your needs
                        alt="thumnail"
                      />
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </section>

      <section className=" article  p-6 w-fit container mx-[5%]">
		<div className="heading py-6">
			<h3 className="text-3xl md:text-4xl lg:text-5xl">Latest Articles</h3>
		</div>

		<div className="all-cards  grid grid-cols-1 mx-auto sm:grid-cols-2  lg:grid-cols-3 gap-8 ">
    {allPost.map((post)=>{
          console.log(post.title.rendered);
          return 	<div  key={post.id}>
           <div className="post-card border-2 p-4 my-2 cursor-pointer ">
				<div className="card-image ">
        {post.yoast_head_json.og_image ? (
                    <>
                      <Image
                        src={post.yoast_head_json.og_image["0"].url}
                        alt="thumnail"
                        height={250}
                        width={400}
                        className=" rounded-sm absolute  "
                        
                      />
                      
                    </>
                  ) : (
                    ""
                  )}
				</div>
				<div className="time-date flex items-center md:space-x-8 text-xs space-x-4 py-4">
					<div className="topic flex space-x-4 py-2 items-center">
						<p className="bg-red-800 py-1 px-3 text-xsm rounded-full tracking-wider text-white">Technology</p>
						<p className="text-xsm tracking-wider">May 12, 2022</p>
						<p className="text-xsm tracking-wider">11 minutes</p>
					</div>
				</div>
				<div className="card-title cursor-pointer">
        <Link href={`/blogpost/${post.slug}`}>
					<h3 className="text-2xl hover:underline cursor-pointer card-h-text">{post.title.rendered}</h3>
          </Link>
				</div>

				<div className="post-writer flex items-center space-x-3 my-4">
					{/* <img className="w-8 h-8 rounded-full" src="assets/img-2.jpg" alt=""/> */}
					<p className="text-sm tracking-wider user-color ">Nitesh Yadav</p>
				</div>
			</div>
          </div>
        })}
			
		</div>
	</section>

    </div>
  )


}


export async function getStaticProps(context) {
  let mostRecentPost = null
  mostRecentPost = await get_most_recent_post()
  let allPost = null
   allPost =  await get_all_post()
  return {
    props: { mostRecentPost, allPost },
  }
}


