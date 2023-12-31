'use client'
import { motion } from 'framer-motion'
import { socials } from '@/constants'

import styles from '@/styles'
import { footerVariants } from '@/utils/motion'
import Image from 'next/image'
import headset from '@/public/headset.svg'

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial='hidden'
      whileInView={'show'}
      className={`${styles.paddings} py-8 relative`}
    >
      <div className='footer-gradient' />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className='flex items-center justify-between flex-wrap gap-5'>
          <h4 className='font-bold md:text-[64px] text-[44px] text-white'>
            Enter the Metaverse
          </h4>
          <button
            type='button'
            className='flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]'
          >
            <Image
              src={headset}
              alt='headset'
              className='w-[24px] h-[24px] object-contain'
            />
            <span className='font-normal text-[16px] text-white'>
              ENTER METAVERSE
            </span>
          </button>
        </div>
        <div className='flex items-center justify-between flex-wrap gap-4'>
          <h4 className='font-extrabold text-[24px] text-white'>Metaversus</h4>
          <p className='font-normal text-[14px] text-white opacity-50'>
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p>
          <div className='flex gap-4 '>
            {socials?.map((social) => {
              return (
                <Image
                  key={social.name}
                  src={social.url}
                  alt={social?.name}
                  className='w-[24px] h-[24px] object-contain cursor-pointer'
                  height={24}
                  width={24}
                />
              )
            })}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
