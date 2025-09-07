/* eslint-disable no-unused-vars */
import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "motion/react"

const OurWork = () => {
        const workData = [
                {
                        title: 'Mobile app marketing',
                        description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
                        image: assets.work_mobile_app
                },
                {
                        title: 'Dashboard management',
                        description: 'We help you to execute your program and delevers results.',
                        image: assets.work_dashboard_management
                }, {
                        title: 'Fitnes app promotion',
                        description: 'We help you to crate a marketing strategy that works.',
                        image: assets.work_fitness_app
                },]
        return (
                <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.2 }} 
                viewport={{ once: true }}
                id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
                        <Title title='Our latest work' desc='From strategy to execution, we craft digital solutions that move your business forward.' />

                        <div>
                                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5x1'>
                                        {
                                        workData.map((work, index)=>(
                                        <motion.div
                                        initial={{ y: 30, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5 , delay: index * 0.2 }} 
                                        viewport={{ once: true }}
                                        key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                                                <img src={work.image} className='w-full rounded-xl' alt="" />
                                                <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                                                <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                                        </motion.div>
                                        ))
                                        }
                                </div>  
                        </div>
                </motion.div>
        )
}

export default OurWork
