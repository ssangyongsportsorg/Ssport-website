import Image from 'next/image';
import fs from "fs";
import matter from "gray-matter";
import MarkdownIt from "markdown-it"; // import the markdown-it library
import md from "markdown-it"; // import the markdown-it library
import path from "path";
import styles from '../components/Button.module.css';
import Head from 'next/head'
import { DocSearch } from '@docsearch/react'
import a from './docsearch.module.css';
import '@docsearch/css';

// The page for each post
export default function Post({frontmatter, content}) {
    const {title, seo, author, category, date, bannerImage, tags, img, info} = frontmatter

    return 
         <section
  className="bg-gradient-to-br from-indigo-50 via-white to-cyan-100"
>
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <div className={`${a.docSearch} ${a.container}`}>
    <DocSearch
              apiKey="c2e792c2e75fe1dd3e40574f8b4c9a80"
              appId="70GEOCJCSX"
              indexName="help"
            />
          </div>    
  </div>
</section>

  <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 ">
     
  <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">

        <header className="mb-4 lg:mb-6 not-format">                   
          <h1 className={`mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white ${styles.abc}`}>
        {title}
        </h1>
        <address className="flex items-center mb-6 not-italic">
          <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
          
            <Image
  className="mr-4 w-16 h-16 rounded-full"
  src={img}
  alt={author}
  width={64}
  height={64}
/>
            <div>
              <a
                href="#"
                rel="author"
                className="text-xl font-bold text-gray-900 dark:text-white"
              >
                {author}
              </a>
              <p className="text-base font-light text-gray-500 dark:text-gray-400">
                    {info}
              </p>
              <p className="text-base font-light text-gray-500 dark:text-gray-400">
                <time
                  pubdate=""
                  dateTime="{date}"
                  title="{date}"
                >
                  {date}
                </time>
              </p>
            </div>
          </div>
        </address>      
    <div dangerouslySetInnerHTML={{ __html: content }} />
      </header>
<div className="mb-10 flex flex-col items-center justify-center space-y-2 border-t border-gray-200 py-10">
  <p className="text-gray-500 sm:text-lg">這是否回答你的問題？</p>
  <div className="flex space-x-4">
    <button className="text-4xl transition-all duration-75 hover:scale-110 active:scale-100">
      😞
    </button>
    <button className="text-4xl transition-all duration-75 hover:scale-110 active:scale-100">
      😐
    </button>
    <button className="text-4xl transition-all duration-75 hover:scale-110 active:scale-100">
      😀
    </button>
  </div>
</div>

    </article>
     <Head>
        <title>{title}-雙龍體育blog</title>
       <meta name="description" content={`{tittle}-雙龍體育blog`} />
      </Head>
  </div>
</main>

}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
  const fullPath = path.join("support", `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  xhtmlOut: true,
  // Disable header tags
  header: false,
    heading: false,
    plugins: [require('markdown-it-attrs')],


});
md.use(require('markdown-it-attrs'), {
    leftDelimiter: '[',
    rightDelimiter: ']',
  });
  const htmlContent = md.render(content);

  return {
  props: {
    frontmatter,
    content: htmlContent,
    },
  };
}  
