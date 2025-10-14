'use client'
import { motion } from "framer-motion";
import Link from 'next/link';

function NotFound() {
    return (
        <div className="border border-x-[#D9D9D9]">
            <div className="container m-auto">
                <div className="h-screen flex items-center justify-center flex-col">
                    <motion.div
                        initial={{ opacity: 0, }}
                        whileInView={{ opacity: 1, }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="text-center">
                        <h1 className="uppercase text-[32px] md:text-[60px]  lg:text-[120px] text-[#161616] font-semibold">404 NOT FOUND</h1>
                        {/* <p className="pt-6 text-base text-[15px] leading-[1.6]">Sorry about that! <br /> Please visit our homepage to get where you need to go.</p> */}
                        <p className="w-full text-center text-[15px] 4xl:text-[24px] 3xl:text-[20px]  lg:text-[18px] md:text-[16px] mt-5"> Sorry about that! <br /> Please visit our homepage to get where you need to go. </p>
                        <div className="mt-6">
                            <Link href='/'>
                                <button
                                    className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
                                    Back To Home {'->'}
                                </button>
                            </Link>
                        </div>
                    </motion.div>


                </div>

            </div>
        </div>
    )
}

export default NotFound;



















