import Supportchoice from './components/supportchoice';
import Supporthero from './components/supporthero';
import Ticket from './components/ticket';

import Head from 'next/head'

const support = () => {
  return (
       <>
<Head>
        <title>雙龍體育幫助</title>
        <meta name="description" content="歡迎來到雙龍體育幫助中心,任何問題立刻聯繫" />
      </Head>
      
      <div>

               <Supporthero />

        <Supportchoice />
                <Ticket />
      </div>
    </>
      );
}

export default support;
