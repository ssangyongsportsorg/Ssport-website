import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from './components/head'
import Footer from './components/footer'
import { SessionProvider } from 'next-auth/react'
import Script from 'next/script';
import { Bubble } from "@typebot.io/nextjs";

export default function App({
  Component, 
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <div>
      
        <div className="bg-gradient h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
      
<Bubble
      typebot="customer-support-q6zv3pv"
     apiHost="https://ssportbotview.vercel.app"
      theme={{ button: { backgroundColor: "#0042DA" } }}
    />        <SessionProvider session={session}>
          <Head />
          <Component {...pageProps} />
          <Footer />
        </SessionProvider>
      
      <Script src="/chat.js" />
    </div>
  );
}
