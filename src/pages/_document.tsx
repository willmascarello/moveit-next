import Document, {Html, Head, Main, NextScript} from 'next/document';
// What is declared here is always load on all Pages. Doesn't recalculate when user access different Pages.
// This is static

export default class MyDocument extends Document {
  render () {
    return(
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}