import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from './components/head'
import Footer from './components/footer'
import { SessionProvider } from "next-auth/react"
export default function App({
  pageProps: { session, Component, pageProps },
}) {
  return (
    <div>
<Head />
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
              <Footer />
    
</div>
  )
}
