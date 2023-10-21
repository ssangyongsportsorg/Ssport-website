import Tvhero from './components/Tvhero';
import Price from './components/price';
import Feature from './components/feature';
import React from 'react';
import Head from 'next/head'
const Home = () => {
  return (
    <>
<Head>
        <title>雙龍體育TV</title>
        <meta name="description" content="雙龍體育TV直播比賽，快速，安全立刻購買！ 註冊登入" />
      </Head>
      <div>
        <Tvhero />
        <Feature />
        <Price />
       
      </div>
    </>
  );
}

export default Home;
