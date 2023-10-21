import Head from 'next/head'
import styles from './components/Button.module.css';
function teamchoose() {

  return (   

        <div>

   <section className="bg-white dark:bg-gray-900">

  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">

    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
立刻
      <span className={styles.abc}>選隊</span>

    </h2>

    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">

      立刻選擇球隊

    </p>

    <form method="POST" action="https://submit-form.com/yFAbXMpc" className="space-y-8">

      <div>

       <label

  htmlFor="email"

  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"

>

  你的電子郵件

</label>

<input

  type="email"

  id="email"

  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"

  placeholder="peter@ssangyongsports.org"

  required={true}

/>

      </div>

      <div>

        <label

          htmlFor="subject"

          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"

        >

         
          <label

          htmlFor="subject"

          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"

        >

           球隊1

        </label>

        <input

          type="text"

          id="subject"

          required={true}

          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"

          placeholder="選擇球隊"

          />

        </label>
<label

          htmlFor="subject"

          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"

        >

          
  
<label

          htmlFor="subject"

          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"

        >

           球隊2

        </label>

        <input

          type="text"

          id="subject"

          required={true}

          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"

          placeholder="選擇球隊"

          />
        </label>
        <label

          htmlFor="subject"

          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"

        >

         
          <label

          htmlFor="subject"

          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"

        >

           球隊3

        </label>

        <input

          type="text"

          id="subject"

          required={true}

          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"

          placeholder="選擇球隊"

          />
        

        </label>
        
      </div>

      <div className="sm:col-span-2">

       

      </div>

      <button

        type="submit"

        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"

      >

        Send message

      </button>

    </form>

  </div>

</section>

          <Head>

        <title>聯繫-雙龍體育</title>

        <meta name="description" content="為了幫助您更好地解決任何雙龍體育的問題，我們在此提供一個聯繫我們的專門渠道。立刻上聯繫-雙龍體育" />

      </Head>

  

      </div>

  )

}

export default teamchoose

