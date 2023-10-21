import '@/styles/globals.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from './components/head'
import Footer from './components/footer'
import { SessionProvider } from 'next-auth/react'
import Script from 'next/script';
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  Component, 
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <html lang="zh-tw">
      <SessionProvider session={session}>
        <div>
  <Script src="/chat.js" />
        <Head />
      <body>{children}</body>
          <Footer />
        </div>
    </SessionProvider>
    </html>
  )
}
