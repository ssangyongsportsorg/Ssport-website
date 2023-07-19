import Hero from './components/Hero';
import Table from './components/table';
import Tabl from './components/tabl';
import './components/change.css'
import Sport from './components/sport';
import React from 'react';
import Head from 'next/head'

export default function Home() {

  useEffect(() => {
    document.querySelector('.animated').classList.add('fade');

    return () => {
      document.querySelector('.animated').classList.remove('fade');
    }
  }, []);

  return (
    <div className="animated">
       <Head>
        <title>雙龍體育</title>
        <meta name="description" content="雙龍體育網站 - 專業體育賽事！ 提供最新的雙龍體育資訊、TV、運動比賽報導，讓您輕鬆了解雙龍體育。歡迎加入雙龍運動論壇，一起與大家溝通！" />
      </Head>

      <div>
        <Hero />
        <Sport />
        <div id="anchor_one" />
        <Table />
        <Tabl />
      </div>
    </div>
  )
}
