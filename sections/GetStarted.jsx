'use client'
import { motion } from 'framer-motion'
import { startingFeatures } from '../constants'
import { TitleText, TypingText, StartSteps } from '../components'
import styles from '@/styles'
import { staggerContainer, fadeIn, planetVariants } from '@/utils/motion'
import Image from 'next/image'

const GetStarted = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants('left')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <Image
            src='/get-started.png'
            alt='get-started'
            className='w-[90%] h-[90%] object-contain'
            fill
          />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className='flex-[0.75] flex justify-center flex-col'
        >
          <TypingText title={'| How Metaverse Works'} />
          <TitleText title={<>Get started with just a few clicks</>} />
          <div className='flex mt-[31px] flex-col max-w-[370px] gap-[24px]'>
            {startingFeatures?.map((feature, index) => {
              return (
                <StartSteps key={feature} number={index + 1} text={feature} />
              )
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default GetStarted
