import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from './components/navbar'
import Footer from './components/footer'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      
    <Navbar />
      <div />
<Component {...pageProps} />
   </div>
        <Footer />
    
  </div>

  );
}
