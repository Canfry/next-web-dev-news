import Head from 'next/head';

export default function Home() {
  return (
    <div>
      {/* Put Head tag to add head tag in HTML. title, metatag... */}
      <Head>
        <title>WebDev News</title>
        <meta name='keywords' content='web development, programming, NextJS' />
      </Head>
      <h1>Welcome to Next</h1>
    </div>
  );
}
