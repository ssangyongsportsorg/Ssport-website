import { ImageUrl } from "../../utils";

export default function ItemPost({ post: {post } }) {
   
  // const imageUrl= process.env.SITE_URL + post.images[0]
 

  // console.log(imageUrl,' imageUrl ')

  const date = new Date(post.date)

  return (

   <div className="flex justify-between px-4 mx-auto max-w-8xl">
  <div className="hidden mb-6 xl:block lg:w-80">
    <div className="sticky top-36">
    </div>
  </div>
  <div className="w-full max-w-2xl mx-auto">
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <article className="py-6">
        <div className="flex items-center justify-between mb-3 text-gray-500">
          <div>
            <Link
              className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 mb-2"
              href="#"
            >
              
            </Link>
          </div>
          <span className="text-sm">
            {post.date}
          </span>
        </div>
    <h2 className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white `}>
    <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        <p className="mb-5 text-gray-500 dark:text-gray-400">
          {post.seo}
        </p>
        <div className="flex items-center justify-between">
          <a
            className="flex items-center space-x-2"
            href="https://discuss.ssangyongsports.org/members/peter-yang.1/"
          >
            <Image
  className="rounded-full w-7 h-7"
  src={post.img}
  alt={post.author}
/>
            
            <span className="font-medium dark:text-white">
               {post.author}
            </span>
          </a>
          <Link
            href={`/blog/${post.slug}`}
          >
                    閱讀文章
          
          </Link>
        </div>
      </article>
    </div>
  </div>
</div>
  )
}
