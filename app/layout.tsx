import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from './components/head'
import Footer from './components/footer'
import { SessionProvider } from 'next-auth/react'
import Script from 'next/script';

export default function RootLayout({
  children,
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <html lang="zh-tw">
      <SessionProvider session={session}>
        <div>
          <Script src="/chat.js" />
          <Head />
          <body>
            {children}
            {Component && <Component {...pageProps} />}
          </body>
          <Footer />
        </div>
      </SessionProvider>
    </html>
  )
}
