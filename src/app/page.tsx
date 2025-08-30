'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GlassNavigation from '@/components/GlassNavigation'
import ChapterIntro from '@/components/ChapterIntro'
import ChapterContent from '@/components/ChapterContent'
import { chapters } from '@/data/chapters'

export default function Home() {
  const [activeChapter, setActiveChapter] = useState<string>('little-bee')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for luxury experience
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.3
      
      for (let i = chapters.length - 1; i >= 0; i--) {
        const element = document.getElementById(chapters[i].id)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveChapter(chapters[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center space-y-8"
        >
          {/* Loading Logo */}
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-20 h-20 mx-auto bg-gradient-to-br from-madeira-400 to-madeira-600 rounded-2xl flex items-center justify-center"
          >
            <span className="text-white font-bold text-2xl">CR</span>
          </motion.div>

          {/* Loading Text */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="heading-secondary text-white font-serif-custom"
            >
              The Making of Greatness
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="caption text-white/70"
            >
              Preparing the story...
            </motion.p>
          </div>

          {/* Loading Progress */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-madeira-500 to-madeira-600 rounded-full mx-auto max-w-xs"
          />
        </motion.div>
      </div>
    )
  }

  return (
    <div>
      <main className="relative">
        <GlassNavigation 
          activeChapter={activeChapter}
          onChapterChange={setActiveChapter}
        />

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-madeira-900/20 via-black to-gray-900" />
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 1, 0]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 70%, rgba(241, 122, 15, 0.1) 0%, transparent 50%),
                                 radial-gradient(circle at 80% 20%, rgba(49, 153, 104, 0.1) 0%, transparent 50%),
                                 radial-gradient(circle at 60% 80%, rgba(220, 20, 60, 0.1) 0%, transparent 50%)`
              }}
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-12"
            >
              {/* Main Title */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="inline-block glass-medium rounded-full px-8 py-3"
                >
                  <span className="caption text-white/90">DIGITAL BIOGRAPHY</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="heading-primary kinetic-text"
                  style={{ 
                    background: 'linear-gradient(135deg, #f17a0f 0%, #e25c05 50%, #319968 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  The Making of Greatness
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="heading-secondary text-white/90"
                >
                  Cristiano Ronaldo
                </motion.h2>
              </div>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="max-w-3xl mx-auto"
              >
                <p className="body-large text-white/80 font-light leading-relaxed">
                  Journey through seven defining chapters that forged a legend. From the streets of Madeira 
                  to global icon, explore the internal transformation that created football's greatest story.
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="pt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    document.getElementById('little-bee')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    })
                  }}
                  className="btn-primary text-lg px-12 py-4 shadow-xl hover:shadow-madeira-500/25"
                >
                  Begin the Journey
                </motion.button>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 right-20 glass-light rounded-full w-32 h-32 flex items-center justify-center opacity-20"
            >
              <div className="text-4xl">⚽</div>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, 15, 0],
                x: [0, 10, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-32 left-20 glass-dark rounded-2xl p-6 opacity-20"
            >
              <div className="text-2xl">🏆</div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-center"
            >
              <p className="caption text-white/60 mb-4">SCROLL TO EXPLORE</p>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-3 bg-madeira-500 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Chapters */}
        {chapters.map((chapter, index) => (
          <div key={chapter.id}>
            <ChapterIntro 
              chapter={chapter}
              chapterNumber={index + 1}
              isActive={activeChapter === chapter.id}
            />
            <ChapterContent chapter={chapter} />
          </div>
        ))}

        {/* Footer */}
        <footer className="relative py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="glass-medium rounded-2xl p-12">
                <h3 className="heading-secondary text-white mb-6 font-serif-custom">
                  The Journey Continues
                </h3>
                <p className="body-large text-white/80 leading-relaxed mb-8">
                  Greatness isn't a destination—it's a way of being. The story of Cristiano Ronaldo 
                  reminds us that legends are forged through relentless pursuit of excellence, 
                  one chapter at a time.
                </p>
                <div className="inline-flex items-center space-x-4">
                  <div className="w-12 h-1 bg-gradient-to-r from-madeira-500 to-sporting-500 rounded-full" />
                  <span className="caption text-white/70">SIUUUUUU</span>
                  <div className="w-12 h-1 bg-gradient-to-r from-sporting-500 to-madeira-500 rounded-full" />
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="caption text-white/50">
                  © 2025 The Making of Greatness - A Digital Biography Experience
                </p>
              </div>
            </motion.div>
          </div>
        </footer>
      </main>
    </div>
  )
}