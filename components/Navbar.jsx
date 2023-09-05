'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles'
import { navVariants } from '@/utils/motion'
import Image from 'next/image'
import search from '@/public/search.svg'
import menu from '@/public//menu.svg'

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView={'show'}
      className={`${styles.paddings} py-8 relative`}
    >
      <div className='absolute w-[50%] gradient-01 inset-0' />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <Image
          src={search}
          alt='Search'
          className='w-[24px] h-[24px] object-contain'
        />
        <h2 className='font-bold text-[24] text-white leading-[30px]'>
          METAVERSUS
        </h2>
        <Image
          src={menu}
          alt='Menu'
          className='w-[24px] h-[24px] object-contain'
        />
      </div>
    </motion.nav>
  )
}

export default Navbar
