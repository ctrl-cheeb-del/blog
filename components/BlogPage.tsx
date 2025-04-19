"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { Clock, Calendar, User, Github, Twitter, Globe } from "lucide-react"

interface BlogPageProps {
  title: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  imageAlt: string;
  children: React.ReactNode;
}

export default function BlogPage({
  title,
  author,
  date,
  readTime,
  imageUrl,
  imageAlt,
  children,
}: BlogPageProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#1A1B1E] text-white antialiased">
      {/* gradient effect at top */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-purple-500/10 to-transparent blur-8xl" />

      {/* top blur fade thing overlay */}
      <div
        className="fixed top-0 left-0 right-0 h-12 z-10" 
        style={{
          background: "linear-gradient(to bottom, #1A1B1E 10%, transparent)", 
          pointerEvents: "none", 
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mb-8">
            {/* "cd .." Link */}
            <Link href="/" className="inline-block mb-4 text-l text-gray-400 hover:text-white  font-mono transition-colors duration-200">
              cd ..
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {title}
            </h1>
            <div className="flex flex-wrap items-center text-sm text-gray-400 gap-4 mb-6">
              <div className="flex items-center">
                <User size={14} className="mr-1" />
                <span>{author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                <span>{date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative aspect-video mb-10 overflow-hidden rounded-xl"
          >
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="prose prose-invert max-w-none"
          >
            {/* blog content passed as children */}
            {children}
          </motion.div>
        </motion.div>

        {/* social links section */}
        <div className="mt-16 pt-8 border-t border-gray-700/50 flex justify-center gap-6">
          <a href="https://freebrey.art" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Globe size={24} />
          </a>
          <a href="https://x.com/ctrl_cheeb_del" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Twitter size={24} />
          </a>
          <a href="https://github.com/ctrl-cheeb-del" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github size={24} />
          </a>
        </div>

      </div>
    </div>
  )
}
