import Document, { Html, Head, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: styles.css }}
          />
        </>
      )
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <link rel="shortcut icon" href="/favicon.ico" />
        <body>
          <script src="noflash.js" />
          <script
            id="mcjs"
            dangerouslySetInnerHTML={{
              __html: `            !function(c,h,i,m,p)
            {
              ((m = c.createElement(h)),
              (p = c.getElementsByTagName(h)[0]),
              (m.async = 1),
              (m.src = i),
              p.parentNode.insertBefore(m, p))
            }
            (document,"script","https://chimpstatic.com/mcjs-connected/js/users/f917cc7f538901fd1172c9ee9/9da00f83898dffe970c062d10.js");
`
            }}
          />

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
