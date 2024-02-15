import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from './components/head'
import Footer from './components/footer'
import Script from 'next/script';
import Link from 'next/link'
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  // 检查是否是 RestrictedPage，如果是，则不使用 app.tsx
  if (Component.name === 'support') {
    return (
      <div>
        <div className="bg-gradient h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Component {...pageProps} />
      </div>
    );
  }

  
  return (
    <div>
      
               <div className="bg-gradient h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
          
          <Head />
          <br />
                    <br />

          <Component {...pageProps} />
          <Footer />
    
    </div>

    
  );
}
