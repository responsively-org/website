import Head from 'next/head';
import { PostMeta, getSortedPostsData } from '../../lib/posts';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';
import { BlurBG } from '@/components/BlurBG';
import { BlogPostTile } from '@/components/BlogPostTile';
import { CarbonAds } from '@/components/CarbonAds';
import { SkipToContent } from '@/components/SkipToContent';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

interface Props {
  allPostsData: PostMeta[];
}

export default function Blog({ allPostsData }: Props) {
  return (
    <>
      <Head>
        <title>Responsively App Blog</title>
        <meta name="description" content="Latest posts from the Responsively App blog" />
      </Head>

      <SkipToContent />

      <div className="relative min-h-screen overflow-hidden">
        <Header />
        <BlurBG bgColor="none" bubbleType="2" />
        <Container className="relative mb-20 text-justify">
          <main id="main-content">
            <h1 className="my-8 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
              Responsively Blog
            </h1>
            <div className="min-h-[50vh]">
              <ul className="flex list-none flex-col gap-8">
                {allPostsData.map((post, index) => (
                  <li key={post.slug}>
                    <BlogPostTile post={post} />
                  </li>
                ))}
              </ul>
            </div>
          </main>
        </Container>
        <CarbonAds />
      </div>
      <Footer />
    </>
  );
}
