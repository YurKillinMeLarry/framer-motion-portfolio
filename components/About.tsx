import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1.5 }}
      transition={{ duration: 1.5 }}
      className='relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly'
    >
      <h3 className='absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl'>About</h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src='https://cdn.sanity.io/images/evjfr55h/production/3750cc1e34d39ed3181df2d1feece59c8ec94b84-455x917.png'
        className='-mb-20 md:mb-0 flex-shrink-0 w-100 h-100 rounded-full object-fit md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />

      <div className='px-0 space-y-10 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here&apos;s a <span className='underline decoration-[#f7ab0a]/50'>little</span> background
        </h4>
        <p className='text-base'>Hola , im a web developer in pursuit of improvement. </p>
      </div>
    </motion.div>
  )
}
