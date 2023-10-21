import '@/styles/globals.css'
import { Metadata } from 'next'
import type { AppProps } from 'next/app'
import Head from './components/head'
import Footer from './components/footer'
import { SessionProvider } from 'next-auth/react'
import Script from 'next/script';
export const metadata: Metadata = {
  title: {
    template: "Yeecord - %s",
    default: "Yeecord - 萬中選一的 Discord 機器人",
  },
  description:
    "YEE式機器龍的指令及使用教學，透過簡單的一鍵式指令以及中文介面的音樂功能快速建立好和朋友玩耍的優質空間",
  };
  return (
    <html lang="zh-Hant-TW" className={noto.className}>
      <body>
        <SessionProvider session={session}>
        <div>
  <Script src="/chat.js" />
        <Head />
            {children}
            <Footer />
        </div>
    </SessionProvider>
      </body>
    </html>
  );
}
