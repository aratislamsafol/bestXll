export default function Newslater() {
  return (
    <section className="max-w-[1200px] mx-auto dark:bg-gray-900 w-4/5 border-2 border-white rounded-3xl bg-white/15 ">
        <div className="p-4 sm:p-5 md:p-6 ">
            <div className="text-center p-4 border border-white rounded-2xl bgImg py-10 sm:py-12 md:py-16 lg:py-18 xl:py-22 bg-lime-50">
                <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl dark:text-white">Subscribe to our Newsletter</h2>
                <p className="mx-auto max-w-2xl font-light text-gray-500 mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-base sm:text-lg md:text-xl dark:text-gray-400">Get the latest updates and news right in your inbox!</p>
                <form action="#">
                    <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                        <div className="relative w-full">
                            <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enter your email</label>
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required="" />
                        </div>
                        <div>
                            <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-red-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}
