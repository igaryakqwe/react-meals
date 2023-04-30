import { Html, Head, Main, NextScript } from 'next/document'
import Header from "@/pages/components/common/header";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Meals</title>
      </Head>
      <body>
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
