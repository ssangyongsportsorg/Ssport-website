import Head from 'next/head'
import styles from './components/Button.module.css';
import { Label, Select } from 'flowbite-react';
import { FileInput } from 'flowbite-react';

function c() {
  return (   
        <div>
   <section className="bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
      <span className={styles.abc}>聯繫</span>
      我們
    </h2>
    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
      有任何問題，立刻聯繫我們😊
    </p>
    <form
              action="https://submit-form.com/8IYmEIfJ"
              name="聯繫表單"
              method="POST"
    className="space-y-8"
            >
      <input
    type="hidden"
    name="_redirect"
    value="https://www.ssangyongsports.org/thanks"
  />
        <input type="hidden" name="form-name" value="聯繫表單" />
             <label
         htmlFor="name"
  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
>
  你的電子郵件

<input
  type="name"
  name="email"
  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
  placeholder="peter@ssangyongsports.org"
  required={true}
/>
      </label>
      <input type="hidden" name="_email.subject" value="雙龍體育網站聯繫資訊" />
       <input type="hidden" name="_email.from" value="雙龍體育聯繫客戶" />
      <div
      className="max-w-md"
      id="select"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="幫助範圍"
          value="幫助範圍"
        />
      </div>
      <Select
        name="help"
        required
      >
      <option value="雙龍體育">雙龍體育</option>
    <option value="雙龍職籃">雙龍職籃</option>
    <option value="雙龍職棒">雙龍職棒</option>
    <option value="雙龍體育TV">雙龍體育TV</option>
    <option value="其他">其他</option>
    <option value="系統網站問題回報">系統網站問題回報</option>
      </Select>
    </div>
        <label
          htmlFor="subject"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          主旨
        
        <input
          type="text"
          name="subject"
          required={true}
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="讓我們得知如何幫助你"
          />
          </label>
    
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          內容
        
        <textarea
          name="message"
          rows={6}
          required={true}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Leave a comment..."
          defaultValue={""}
        />
          </label>

      <button
        type="submit"
        
        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        發送訊息
      </button>
    </form>
  </div>
</section>
          <Head>
        <title>雙龍體育聯絡</title>
        <meta name="description" content="雙龍體育聯繫，為你提供專業的雙龍體育客服，為你解決問題，或聯絡雙龍體育了解你想得知的消息，就立刻上雙龍體育聯絡網站吧" />
      </Head>
  
      </div>
  )
}

export default c

