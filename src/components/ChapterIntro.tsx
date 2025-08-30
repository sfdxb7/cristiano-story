'use client'

import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'
import { Chapter } from '@/data/chapters'

interface ChapterIntroProps {
  chapter: Chapter
  chapterNumber: number
  isActive?: boolean
}

export default function ChapterIntro({ chapter, chapterNumber, isActive }: ChapterIntroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.9])

  // Dynamic color scheme based on chapter
  const getColorScheme = () => {
    switch (chapter.colorScheme) {
      case 'madeira':
        return {
          primary: '#f17a0f',
          secondary: '#e25c05',
          gradient: 'from-madeira-500/20 to-madeira-600/10',
          glow: 'shadow-madeira-500/25'
        }
      case 'sporting':
        return {
          primary: '#319968',
          secondary: '#237b52',
          gradient: 'from-sporting-500/20 to-sporting-600/10',
          glow: 'shadow-sporting-500/25'
        }
      case 'red':
        return {
          primary: '#dc143c',
          secondary: '#b91c3c',
          gradient: 'from-red-500/20 to-red-600/10',
          glow: 'shadow-red-500/25'
        }
      default:
        return {
          primary: '#f17a0f',
          secondary: '#e25c05',
          gradient: 'from-madeira-500/20 to-madeira-600/10',
          glow: 'shadow-madeira-500/25'
        }
    }
  }

  const colors = getColorScheme()

  return (
    <section
      ref={ref}
      id={chapter.id}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden theme-${chapter.colorScheme}`}
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-20`} />
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-radial from-current/10 via-transparent to-transparent"
        />
      </div>

      {/* Background image with parallax */}
      {chapter.images[0] && (
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
          className="absolute inset-0 opacity-20"
        >
          <Image
            src={chapter.images[0]}
            alt={chapter.title}
            fill
            className="object-cover image-artistic"
            priority={chapterNumber === 1}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </motion.div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          style={{ opacity, scale }}
          className="space-y-8"
        >
          {/* Chapter number */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block"
          >
            <div className={`glass-medium rounded-full px-6 py-3 ${colors.glow}`}>
              <span className="caption text-white/90">
                Chapter {chapterNumber.toString().padStart(2, '0')}
              </span>
            </div>
          </motion.div>

          {/* Period */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="caption text-white/70 mb-4">
              {chapter.period}
            </p>
          </motion.div>

          {/* Chapter title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="heading-primary kinetic-text"
            style={{ color: colors.primary }}
          >
            {chapter.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="heading-secondary text-white/90"
          >
            {chapter.subtitle}
          </motion.h2>

          {/* Theme description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <p className="body-large text-white/80 font-light italic">
              {chapter.theme}
            </p>
          </motion.div>

          {/* Key moment quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-light rounded-2xl p-8 border-l-4" style={{ borderColor: colors.primary }}>
              <blockquote className="heading-tertiary text-white/95 font-light leading-relaxed">
                "{chapter.keyMoment}"
              </blockquote>
            </div>
          </motion.div>

          {/* Visual theme indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="pt-8"
          >
            <div className="inline-flex items-center space-x-4 glass-dark rounded-full px-6 py-3">
              <div 
                className="w-3 h-3 rounded-full animate-pulse" 
                style={{ backgroundColor: colors.primary }}
              />
              <span className="caption text-white/70">
                {chapter.visualTheme}
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="glass-light rounded-full p-4"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white/60"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        style={{
          rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
        }}
        className="absolute top-20 right-20 opacity-10"
      >
        <div 
          className="w-32 h-32 rounded-full border-2 border-dashed" 
          style={{ borderColor: colors.primary }}
        />
      </motion.div>

      <motion.div
        style={{
          rotate: useTransform(scrollYProgress, [0, 1], [360, 0]),
        }}
        className="absolute bottom-20 left-20 opacity-10"
      >
        <div 
          className="w-24 h-24 rounded-full border border-dashed" 
          style={{ borderColor: colors.secondary }}
        />
      </motion.div>
    </section>
  )
}