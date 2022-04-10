import Head from 'next/head';
import {server} from "./config";

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/articles`)

  const articles = await res.json()


  return {
        props: {
            articles,
        },
  }
}

//export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=8`)
//   const articles = await res.json()
//
//   return {
    // props: {
     //  articles,
    // },
  // }
//}
import ArticleList from "../componets/ArticleList";


export default function Home({articles}) {
  return (
      <div>
        <Head>
          <title>Something</title>
          <meta name="keywords" content = "web"/>
        </Head>
          <ArticleList articles={articles} />
      </div>
  )
}
