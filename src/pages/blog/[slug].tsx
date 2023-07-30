import Head from 'next/head';
import Link from 'next/link';
import {Post, PostMeta, getPostData, getSortedPostsData} from '../../lib/posts';

import {Button} from '@/components/Button';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {Container} from '@/components/Container';
import {BlurBG} from '@/components/BlurBG';
import {SponsorsAndContributors} from '@/components/SponsorsAndContributors';
import {BlogPostTile} from '@/components/BlogPostTile';
import {CarbonAds} from '@/components/CarbonAds';

export async function getStaticPaths() {
  return {paths: getSortedPostsData().map(post => ({params: {slug: post.slug}})), fallback: false};
}

export async function getStaticProps({params}: {params: {slug: string}}) {
  return {
    props: {
      post: await getPostData(params.slug),
    },
  };
}

interface Props {
  post: Post;
}

export default function BlogPost({post}: Props) {
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
            {post.title}
          </h1>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <img src={post.authorPic} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <a href={post.authorTwitterUrl}>
                    <span className="absolute inset-0" />
                    {post.author}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <time dateTime={post.date} className="text-gray-500">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          </div>
          <CarbonAds />
          <article className="prose prose-slate lg:prose-xl">
            <div dangerouslySetInnerHTML={{__html: post.contentHtml}} />
          </article>
        </Container>
      </div>
      <Footer />
    </>
  );
}
