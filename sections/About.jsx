'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { TypingText } from '../components'
import styles from '@/styles'
import { fadeIn, staggerContainer } from '@/utils/motion'
import arrowDown from '@/public/arrow-down.svg'

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='z-0 gradient-02' />
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title='| About Metaversus' textStyles='text-center' />
      <motion.p className='mt-[8px] font-normal sm:text-[32] text-[20] text-center text-secondary-white'>
        {' '}
        <span className='font-extrabold text-white'>Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it's really real, you can feel what you feel in this metaverse
        world, because this is really the{' '}
        <span className='font-extrabold text-white'>
          {' '}
          madness of the metaverse
        </span>{' '}
        of today, using only{' '}
        <span className='font-extrabold text-white'>VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Let's explore the madness of the metaverse by scrolling down
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src={arrowDown}
        alt='arrow-down'
        className='w-[18px] h-[28px] object-contain mt-[28px]'
      />
    </motion.div>
  </section>
  //   <section>Hello</section>
)

export default About
