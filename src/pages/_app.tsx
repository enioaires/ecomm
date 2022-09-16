import '../assets/css/index.css'
import { stylesGlobal } from '../styles/globals'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Global } from '@emotion/react'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>E-com</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta
          name="description"
          // eslint-disable-next-line max-len
          content="Focados em desenvolvimento de websites e aplicativos utilizando bibliotecas e frameworks, além de compartilhamento de conhecimentos"
        />
        <meta name="author" content="Julio Cesar" />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="content-language" content="pt-br, en-US" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="copyright" content="©2021 Unnameds" />
        <meta
          name="keywords"
          // eslint-disable-next-line max-len
          content="unnameds, javascript, html, css, react, api, documentação, lib de components, startup"
        />
        <meta httpEquiv="pragma" content="no-cache" />
        <meta name="robots" content="index,follow" />
        <meta httpEquiv="imagetoolbar" content="no" />
        <meta name="generator" content="Next.js" />
        <meta name="rating" content="general" />
      </Head>

      <Global styles={stylesGlobal} />
      <Component {...pageProps} />

    </>
  )
}

export default MyApp
