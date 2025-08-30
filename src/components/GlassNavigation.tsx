'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { chapters } from '@/data/chapters'

interface GlassNavigationProps {
  activeChapter?: string
  onChapterChange?: (chapterId: string) => void
}

export default function GlassNavigation({ activeChapter, onChapterChange }: GlassNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleChapterClick = (chapterId: string) => {
    onChapterChange?.(chapterId)
    setIsOpen(false)
    
    // Smooth scroll to chapter
    const element = document.getElementById(chapterId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <>
      {/* Main Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-medium shadow-lg' : 'glass-light'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-madeira-400 to-madeira-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CR</span>
              </div>
              <div>
                <h1 className="text-white font-serif-custom text-lg font-semibold">
                  The Making of Greatness
                </h1>
                <p className="text-xs text-gray-400 font-light">Digital Biography</p>
              </div>
            </motion.div>

            {/* Chapter Progress Indicator */}
            <div className="hidden md:flex items-center space-x-2">
              {chapters.map((chapter, index) => (
                <motion.button
                  key={chapter.id}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleChapterClick(chapter.id)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeChapter === chapter.id
                      ? 'bg-madeira-500 ring-2 ring-madeira-400/50'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  title={chapter.title}
                />
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden glass-light p-3 rounded-lg hover:glass-medium transition-all duration-200"
              aria-label="Toggle navigation menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                <motion.div
                  animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
                  className="w-full h-0.5 bg-white origin-center"
                />
                <motion.div
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  className="w-full h-0.5 bg-white"
                />
                <motion.div
                  animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
                  className="w-full h-0.5 bg-white origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Chapter Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-4 right-4 z-40 md:hidden glass-medium rounded-xl p-6 shadow-2xl"
          >
            <div className="space-y-4">
              <h3 className="text-white font-serif-custom text-xl font-semibold mb-4">
                Chapters
              </h3>
              {chapters.map((chapter, index) => (
                <motion.button
                  key={chapter.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  onClick={() => handleChapterClick(chapter.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                    activeChapter === chapter.id
                      ? 'bg-madeira-500/20 border-l-4 border-madeira-500'
                      : 'hover:bg-white/10 border-l-4 border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium">{chapter.title}</h4>
                      <p className="text-gray-400 text-sm">{chapter.period}</p>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      activeChapter === chapter.id
                        ? 'bg-madeira-500 text-white'
                        : 'bg-white/20 text-gray-300'
                    }`}>
                      {index + 1}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chapter Navigator (Desktop) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="hidden xl:block fixed right-6 top-1/2 transform -translate-y-1/2 z-40"
      >
        <div className="glass-medium rounded-full p-2 space-y-3">
          {chapters.map((chapter, index) => (
            <motion.button
              key={chapter.id}
              whileHover={{ scale: 1.3, x: -10 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleChapterClick(chapter.id)}
              className={`relative w-4 h-4 rounded-full transition-all duration-300 block ${
                activeChapter === chapter.id
                  ? 'bg-madeira-500 ring-4 ring-madeira-400/30'
                  : 'bg-white/40 hover:bg-white/70'
              }`}
              title={chapter.title}
            >
              {activeChapter === chapter.id && (
                <motion.div
                  layoutId="activeChapter"
                  className="absolute -left-3 top-1/2 transform -translate-y-1/2 glass-dark rounded-lg px-3 py-1 whitespace-nowrap"
                >
                  <span className="text-white text-sm font-medium">
                    {chapter.title}
                  </span>
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}