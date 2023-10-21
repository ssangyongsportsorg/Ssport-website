import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'
import styles from './components/Button.module.css';


// The Blog Page Content
export default function Blog({posts}){
    return <main>
        <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
      <h2 className={`mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white `}>
        雙龍體育
            <span className={styles.abc}>部落格</span>
      </h2>
      <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
   任何關於雙龍體育的任何關於雙龍體育的消息和公告
      </p>
      <Head>
        <title>雙龍體育blog</title>
        <meta name="description" content="任何關於雙龍體育的任何關於雙龍體育的消息和公告,就上雙龍體育blog" />
      </Head>
    </div>
  </div>
</section>

        {posts.map(post => {
            //extract slug and frontmatter
            const {slug, frontmatter} = post
            //extract frontmatter properties
            const {title, seo, author, category, date, bannerImage, tags, img, info} = frontmatter

            //JSX for individual blog listing
            return <article key={title}>
            
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
              #{tags}
            </Link>
          </div>
          <span className="text-sm">
            {date}
          </span>
        </div>
    <h2 className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white `}>
    <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </h2>
        <p className="mb-5 text-gray-500 dark:text-gray-400">
          {seo}
        </p>
        <div className="flex items-center justify-between">
          <a
            className="flex items-center space-x-2"
            href="https://discuss.ssangyongsports.org/members/peter-yang.1/"
          >
            <Image
  className="rounded-full w-7 h-7"
  src={img}
  alt={author}
/>
            
            <span className="font-medium dark:text-white">
               {author}
            </span>
          </a>
          <Link
            className="inline-flex items-center font-medium text-blue-600 hover:underline dark:text-blue-500"
            href={`/blog/${slug}`}
          >
                    閱讀文章
            <svg
              className="w-4 h-4 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </article>
    </div>
  </div>
</div>

</article>

        })}
</main>
}


//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  // Sort posts in descending order based on the date property
  posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

  return {
    props: {
      posts,
    },
  };
}
