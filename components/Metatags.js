import Head from 'next/head';

export default function Metatags({
  title = 'devshare',
  description = 'A social blogging app inspired by sites Dev.to and Medium',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  );
}
