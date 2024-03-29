import Link from 'next/link'
function contact() {
  return (
<div className="min-h-[50vh] border border-gray-200 bg-white/50 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur-lg">
        <div className="flex max-w-screen-lg flex-col py-10">
          <div className="flex items-center space-x-2">
            <Link
              href="/support"
              className="text-sm font-medium text-gray-500 hover:text-gray-800"
            >
             所有類別
            </Link>
         
            <Link
              href="/"
              className="text-sm font-medium text-gray-500 hover:text-gray-800"
            >
              聯繫
            </Link>
          </div>
          <div className="my-8 flex flex-col space-y-4">
            <Link href={`/`}>
              <h1 className="font-display text-2xl font-bold sm:text-4xl">
                聯繫
              </h1>
            </Link>
            <p className="text-gray-500">關於聯繫的問題</p>
          </div>
          <div className="grid gap-2 rounded-xl border border-gray-200 bg-white p-4">
            <Link
      href="/docs/contact/form"
      className="group flex items-center justify-between rounded-lg px-2 py-3 transition-colors hover:bg-purple-100 active:bg-purple-200 sm:px-4"
    >
      <h3 className="text-sm font-medium text-gray-600 group-hover:text-purple-600 sm:text-base">
        如何使用聯繫表聯繫我們
      </h3>
    </Link>
<Link
      href="/docs/contact/speed"
      className="group flex items-center justify-between rounded-lg px-2 py-3 transition-colors hover:bg-purple-100 active:bg-purple-200 sm:px-4"
    >
      <h3 className="text-sm font-medium text-gray-600 group-hover:text-purple-600 sm:text-base">
        我們何時回復幫助請求
      </h3>
    </Link>
          </div>
        </div>
      </div>
)
}

export default contact;
