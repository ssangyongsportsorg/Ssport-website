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
  children,
}: {
  children: React.ReactNode
}) {
  Component,
  pageProps: { session, ...pageProps }
}: AppProps<{ session: Session }>) {
  return (
    <html lang="zh-tw">
      
        <div>
  <Script src="/chat.js" />
        <Head />
      <body>{children}</body>
          <Footer />
        </div>
  
    </html>
  )
} 
