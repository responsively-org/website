import { Head, Html, Main, NextScript } from 'next/document'

const description = 'A dev-tool that aids faster and precise responsive web development.';
const image = '/assets/img/responsively-image.png';
const title = "Responsively App - A Web Developer's Browser";

export default function Document(props) {
  let pageProps = props.__NEXT_DATA__?.props?.pageProps;

  return (
    <Html
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta data-react-helmet="true" name="description" content={description} />
        <meta data-react-helmet="true" property="og:title" content={title} />
        <meta data-react-helmet="true" property="og:description" content={description} />
        <meta data-react-helmet="true" property="og:type" content="website" />
        <meta data-react-helmet="true" property="og:image" content={image} />
        <meta data-react-helmet="true" property="twitter:image" content={image} />
        <meta data-react-helmet="true" name="twitter:card" content="summary_large_image" />
        <meta data-react-helmet="true" name="twitter:creator" content="ResponsivelyApp" />
        <meta data-react-helmet="true" name="twitter:site" content="ResponsivelyApp" />
        <meta data-react-helmet="true" name="twitter:title" content={title} />
        <meta data-react-helmet="true" name="twitter:description" content={description} />
      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
