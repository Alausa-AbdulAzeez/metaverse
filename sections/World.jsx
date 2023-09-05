/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from 'framer-motion'
import styles from '@/styles'
import { staggerContainer, fadeIn } from '@/utils/motion'
import { TitleText, TypingText } from '../components'

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col `}
    >
      <TypingText title={'| People in the world'} textStyles='text-center' />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles='text-center'
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className='relative mt-[68px] flex w-full'
      >
        <img src='/map.png' className='w-full h-full object-cover' alt='map' />
        <div className='absolute bottom-20 right-20 w-[70px] h-[70px] rounded-full shadow-3xl shadow-[#c75134]'>
          <img src='people-01.png' alt='people' className='w-full h-full' />
        </div>
        <div className='absolute top-10 left-20 w-[70px] h-[70px] rounded-full shadow-3xl shadow-[#c7aa34]'>
          <img src='people-02.png' alt='people' className='w-full h-full' />
        </div>
        <div
          className={`absolute top-1/2 left-[45%]  w-[70px] h-[70px] rounded-full shadow-3xl shadow-[#79a7ac] `}
        >
          <img src='people-03.png' alt='people' className='w-full h-full  ' />
        </div>
      </motion.div>
    </motion.div>
  </section>
)

// background: linear-gradient(180deg, #D46062 0%, #880383 100%);

export default World
