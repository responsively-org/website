import Head from 'next/head';
import { Post, getPostData, getSortedPostsData } from '../../lib/posts';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';
import { BlurBG } from '@/components/BlurBG';
import { CarbonAds } from '@/components/CarbonAds';
import { SkipToContent } from '@/components/SkipToContent';

export async function getStaticPaths() {
  return { paths: getSortedPostsData().map(post => ({ params: { slug: post.slug } })), fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  return {
    props: {
      post: await getPostData(params.slug),
    },
  };
}

interface Props {
  post: Post;
}

export default function BlogPost({ post }: Props) {
  console.log('post', post.coverImg);
  return (
    <>
      <Head>
        <title>{post.title} - Responsively App Blog</title>
        <meta name="description" content={`Read ${post.title} on the Responsively App Blog`} />
        <meta property="og:title" content={`${post.title} - Responsively App Blog`} />
        <meta
          property="og:description"
          content={`Read ${post.title} on the Responsively App Blog`}
        />
        <meta property="og:image" content={post.coverImg} />
        <meta property="og:url" content={`https://responsively.app/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@ResponsivelyApp" />
        <meta property="twitter:creator" content="@ResponsivelyApp" />
        <meta property="twitter:title" content={`${post.title} - Responsively App Blog`} />
        <meta
          property="twitter:description"
          content={`Read ${post.title} on the Responsively App Blog`}
        />
        <meta property="twitter:image" content={post.coverImg} />
      </Head>

      <SkipToContent />

      <div className="relative min-h-screen overflow-hidden">
        <Header />
        <BlurBG bgColor="none" bubbleType="2" />
        <Container className="relative mb-20 text-justify">
          <main id="main-content">
            <h1 className="my-8 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
              {post.title}
            </h1>

            <div className="flex justify-between">
              <div className="flex gap-4">
                <img
                  src={post.authorPic}
                  alt={post.author}
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.authorTwitterUrl}>
                      <span className="sr-only">Author Twitter link</span>
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
            {post.coverImg != null ? (
              <img src={post.coverImg} alt="" className="my-4 w-full" />
            ) : null}
            {/* <CarbonAds /> */}
            <article className="prose prose-slate mx-auto lg:prose-xl">
              <div dangerouslySetInnerHTML={{__html: post.contentHtml}} />
            </article>
          </main>
        </Container>
      </div>
      <Footer />
    </>
  );
}
