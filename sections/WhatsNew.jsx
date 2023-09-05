'use client'
import { motion } from 'framer-motion'
import { newFeatures } from '../constants'
import { TitleText, TypingText, NewFeatures } from '../components'
import styles from '@/styles'
import { staggerContainer, fadeIn, planetVariants } from '@/utils/motion'
import Image from 'next/image'
import Whatsnew from '@/public/whats-new.png'

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className='flex-[0.75] flex justify-center flex-col'
      >
        <TypingText title={"| What's New"} />
        <TitleText title={<>What's new about Metaversus?</>} />
        <div className='flex mt-[48px] flex-wrap justify-between gap-[24px]'>
          {newFeatures?.map((feature, index) => {
            return <NewFeatures key={feature?.title} {...feature} />
          })}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image
          src={Whatsnew}
          alt='whats-new'
          className='w-[90%] h-[90%] object-contain'
        />
      </motion.div>
    </motion.div>
  </section>
)

export default WhatsNew
