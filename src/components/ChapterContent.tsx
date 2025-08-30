'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'
import { Chapter } from '@/data/chapters'

interface ChapterContentProps {
  chapter: Chapter
}

export default function ChapterContent({ chapter }: ChapterContentProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  const getColorScheme = () => {
    switch (chapter.colorScheme) {
      case 'madeira':
        return { primary: '#f17a0f', accent: '#e25c05' }
      case 'sporting':
        return { primary: '#319968', accent: '#237b52' }
      case 'red':
        return { primary: '#dc143c', accent: '#b91c3c' }
      default:
        return { primary: '#f17a0f', accent: '#e25c05' }
    }
  }

  const colors = getColorScheme()

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Story Description */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h3 className="heading-tertiary text-white/90 mb-6">The Story</h3>
                <p className="body-large text-white/80 leading-relaxed">
                  {chapter.description}
                </p>
              </motion.div>

              {/* Quotes Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="space-y-4"
              >
                <h4 className="caption text-white/70 mb-4">DEFINING WORDS</h4>
                {chapter.quotes.map((quote, index) => (
                  <motion.blockquote
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                    className="border-l-2 pl-6 italic text-white/90 body-medium"
                    style={{ borderColor: colors.primary }}
                  >
                    "{quote}"
                  </motion.blockquote>
                ))}
              </motion.div>

              {/* Stats */}
              {chapter.stats && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  className="space-y-4"
                >
                  <h4 className="caption text-white/70 mb-4">KEY NUMBERS</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {chapter.stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                        className="glass-light rounded-xl p-6 text-center hover:glass-medium transition-all duration-300"
                      >
                        <div 
                          className="text-2xl font-bold mb-2"
                          style={{ color: colors.primary }}
                        >
                          {stat.value}
                        </div>
                        <div className="caption text-white/70">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            style={{ y }}
            className="space-y-8"
          >
            {/* Main Image */}
            {chapter.images[1] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative group"
              >
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src={chapter.images[1]}
                    alt={`${chapter.title} - Visual Story`}
                    fill
                    className="object-cover image-artistic group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Floating caption */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-6 left-6 right-6 glass-medium rounded-xl p-4"
                >
                  <p className="caption text-white/90">
                    {chapter.keyMoment}
                  </p>
                </motion.div>
              </motion.div>
            )}

            {/* Secondary Images Grid */}
            {chapter.images[2] && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="relative h-48 rounded-xl overflow-hidden group">
                  <Image
                    src={chapter.images[2]}
                    alt={`${chapter.title} - Detail`}
                    fill
                    className="object-cover image-artistic group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4">
                  <div className="glass-light rounded-xl p-6 h-full flex flex-col justify-center">
                    <div className="space-y-3">
                      <div 
                        className="w-12 h-1 rounded-full"
                        style={{ backgroundColor: colors.primary }}
                      />
                      <h5 className="text-white font-medium">
                        {chapter.visualTheme}
                      </h5>
                      <p className="text-white/70 text-sm">
                        Visual identity defining this chapter's emotional landscape
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Chapter Transition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-32 text-center"
        >
          <div className="glass-medium rounded-full inline-flex items-center px-8 py-4 space-x-4">
            <div 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: colors.primary }}
            />
            <span className="caption text-white/80">
              CHAPTER CONTINUES
            </span>
            <div 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: colors.primary }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}