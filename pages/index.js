import Head from 'next/head';
import ArticleList from '../components/ArticleList';

export default function Home({ articles }) {
  return (
    <div>
      {/* Put Head tag to add head tag in HTML. title, metatag... */}
      <Head>
        <title>WebDev News</title>
        <meta name='keywords' content='web development, programming, NextJS' />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=6'
  );
  const articles = await res.json();

  return {
    props: { articles },
  };
};
