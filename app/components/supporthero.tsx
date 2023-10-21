import styles from './Button.module.css';


function supporthero() {
  return (
<section
  className="bg-white dark:bg-gray-900"
>
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
      需要 <span className={styles.abc}>雙龍體育</span>的幫助嗎?
    </h2>
  </div>
</section>

  )
}

export default supporthero;
