import React from 'react'
import assets from '../assets/assets'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

const Footer = ({ theme }) => {
        return (
                <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }} 
                viewport={{ once: true }}
                className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
                        {/* footer top */}
                        <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
                                <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }} 
                                viewport={{ once: true }}
                                className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
                                        <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className='w-32 sm:w-44' alt="" />
                                        <p className='max-w-md'>From strategy to execution, we craft digital
                                                solutions that move your business forward.</p>
                                        <ul className='flex gap-8'>
                                                <li><a className='hover: text-primary' href="#hero">Home</a></li>
                                                <li><a className='hover: text-primary' href="#services">Services</a></li>
                                                <li><a className='hover: text-primary' href="#our-work">Our Workk</a></li>
                                                <li><a className='hover: text-primary' href="#contact-us">Contact Us</a></li>
                                        </ul>
                                </motion.div>
                                <motion.div
                                initial={{ x: 30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6 ,delay: 0.3 }} 
                                viewport={{ once: true }}
                                className='text-gray-600 dark:text-gray-400'>
                                        <h3 className='font-semibold'>Subscribe to our
                                                newsletter</h3>
                                        <p className='text-sm mt-2 mb-6'>The latest news,
                                                articles, and resources, sent to your inbox weekly.</p>
                                        <div className="flex gap-2 text-sm">
                                                <input type="email" placeholder="Enter your email" className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500' />
                                                <button className='bg-primary text-white rounded px-6'>Subscribe</button>
                                        </div>
                                </motion.div>
                        </div>
                        <hr className='my-6 border-gray-300 dark:border-gray-700' />
                        {/* footer bottom */}
                        <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 }} 
                        viewport={{ once: true }}
                        className='flex flex-col sm:flex-row justify-between text-sm text-gray-600 dark:text-gray-400 gap-4 pb-2'>
                                <p>Copyright © 2025 Jaiswal. All rights reserved.</p>
                                <div className='flex gap-4 items-center justify-between'>
                                        <img src={assets. facebook_icon} alt="" />
                                        <img src={assets.twitter_icon} alt="" />
                                        <img src={assets.instagram_icon} alt="" />
                                        <img src={assets.linkedin_icon} alt="" />
                                </div>
                        </motion.div>
                </motion.div >
        )
}
export default Footer
