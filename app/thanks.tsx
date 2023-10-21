import Head from 'next/head'
const p = () => {
  return (

<main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
  <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <header className="mb-4 lg:mb-6 not-format">        
  <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">感謝你聯繫雙龍體育</h1>
   <p>你被跳轉至此頁面代表我們以收到你的聯繫嘍！</p>
     <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">何時回覆？</h1>
   <p>我們團隊會在一個禮拜內回覆你
如果特殊假期（過年、端午節等國定假日）或假日可能會一個禮拜後回覆
請不要一直重發聯繫，這只會延長回覆時間喔！</p>
  <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">如何在此工單新增問題呢？</h1>
   <p>可以打開工單連結或直接回覆電子郵件</p>
  <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">等了很久都沒回覆該如何？</h1>
   <p>可以查看原先的自動通知郵件中有一個連結點進去確認是否被關閉（被關閉原因可能是使用髒話或令客服人員不舒服的言語或垃圾消息）
如果沒有被關閉請添加評論，我們就會回覆你啦！

感謝🙏你的等待以及聯繫
</p> 
  <Head>
        <title>感謝你的聯繫</title>
        <meta name="description" content="感謝你的聯繫" />
      </Head>
  
      </header>
    </article> 
  </div>
</main>

 );
}

export default p;
