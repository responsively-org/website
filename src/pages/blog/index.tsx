import Head from 'next/head';
import Link from 'next/link';
import {PostMeta, getSortedPostsData} from '../../lib/posts';

import {Button} from '@/components/Button';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {Container} from '@/components/Container';
import {BlurBG} from '@/components/BlurBG';
import {SponsorsAndContributors} from '@/components/SponsorsAndContributors';
import {BlogPostTile} from '@/components/BlogPostTile';
import {CarbonAds} from '@/components/CarbonAds';

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

export default function Blog({allPostsData}: Props) {
  return (
    <>
      <Head>
        <title>Support Responsively App</title>
      </Head>

      <div className="relative min-h-screen overflow-hidden">
        <Header />
        <BlurBG bgColor="none" bubbleType="2" />
        <Container className="relative mb-20 text-justify">
          <h1 className="my-8 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Responsively Blog
          </h1>
          <div className="min-h-[50vh]">
            <ul className="list-none">
              {allPostsData.map(post => (
                <BlogPostTile key={post.slug} post={post} />
              ))}
            </ul>
          </div>
        </Container>
        <CarbonAds />
      </div>
      <Footer />
    </>
  );
}
