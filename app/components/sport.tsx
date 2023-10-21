import styles from './Button.module.css';
function sport() {
return (
  <>
<section className="bg-gray-50 dark:bg-gray-800 border-t border-b border-gray-100 dark:border-gray-700">
  <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
     <h2 className={`mb-6 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 lg:text-center dark:text-white md:text-4xl `}>
      我們的旗下
                   <span className={styles.abc}>運動</span>

    </h2>
  
    <div className="space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 xl:gap-8 sm:space-y-0 md:mt-12">
      <a
        href="https://slb.ssangyongsports.org/"
        className="block px-8 py-12 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 hover:shadow-lg dark:hover:shadow-lg-light"
      >
        <span
          style={{
            boxSizing: "border-box",
            display: "inline-block",
            overflow: "hidden",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
            position: "relative",
            maxWidth: "100%"
          }}
        >
          <img
            alt=""
            className="service-icon"
            src="https://74-rho.vercel.app/images/baseball-16.png"
            width={75}
          />
          <noscript />
        </span>
        <h3 className="font-semibold text-xl text-gray-900 dark:text-white mt-3.5">
          雙龍職棒
        </h3>
      </a>
      <a
        href="https://sba.ssangyongsports.org/"
        className="block px-8 py-12 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 hover:shadow-lg dark:hover:shadow-lg-light"
      >
        <span
          style={{
            boxSizing: "border-box",
            display: "inline-block",
            overflow: "hidden",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
            position: "relative",
            maxWidth: "100%"
          }}
        >
          <img
            alt=""
            className="service-icon"
            src="https://74-rho.vercel.app/images/889455.png"
            width={75}
          />
          <noscript />
        </span>
        <h3 className="font-semibold text-xl text-gray-900 dark:text-white mt-3.5">
          雙龍足球
        </h3>
      </a>
      <a
        href="https://soccer.ssangyongsports.org"
        className="block px-8 py-12 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 hover:shadow-lg dark:hover:shadow-lg-light"
      >
        <span
          style={{
            boxSizing: "border-box",
            display: "inline-block",
            overflow: "hidden",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
            position: "relative",
            maxWidth: "100%"
          }}
        >
          <img
            alt=""
            className="service-icon"
            src="https://74-rho.vercel.app/images/53283.png"
            width={75}
          />
          <noscript />
        </span>
        <h3 className="font-semibold text-xl text-gray-900 dark:text-white mt-3.5">
          雙龍足球
        </h3>
      </a>
      <a href="https://ssangyongsports.org/tv"
        className="block px-8 py-12 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 hover:shadow-lg dark:hover:shadow-lg-light"
      >
        <span
          style={{
            boxSizing: "border-box",
            display: "inline-block",
            overflow: "hidden",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
            position: "relative",
            maxWidth: "100%"
          }}
        >
          <img
            alt=""
            className="service-icon"
            src="https://cdn-icons-png.flaticon.com/512/168/168843.png"
            width={75}
          />
          <noscript />
        </span>
        <h3 className="font-semibold text-xl text-gray-900 dark:text-white mt-3.5">
          雙龍體育tv
        </h3>
      </a>
    </div>
  </div>
</section>

</>

  )
}

export default sport;
