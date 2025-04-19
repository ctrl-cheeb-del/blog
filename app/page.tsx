"use client";

import Link from 'next/link'; 
import "./globals.css"
import { HardDrive, FileText, Github, Twitter, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { posts } from './posts';

export default function Page() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#1A1B1E] text-white font-mono antialiased">
      <motion.div
        className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* ls terminal style header */}
        <motion.div
          className="mb-12 flex items-center gap-3 text-purple-400 text-lg"
          variants={itemVariants}
        >
            {/* <HardDrive size={24} /> */}
            <span className="text-gray-400">~/blog/posts</span>
            <span>$ ls -l</span>
        </motion.div>
        
        {/* file listing style */}
        <motion.div
          className="space-y-3 text-base"
          variants={containerVariants}
        >
          {posts.map((post) => (
            <motion.div
              key={post.slug}
              className="flex items-center gap-6 whitespace-nowrap"
              variants={itemVariants}
            >
              <span className="text-gray-500">-rw-r--r--</span> 
              <span className="text-gray-500">1</span> 
              <span className="text-gray-400">art</span> 
              <span className="text-gray-400">staff</span> 
              <span className="text-gray-500 w-2 text-right">{post.size}</span> 
              <span className="text-gray-500 w-20 text-right">{post.date}</span> 
              <Link href={`/${post.slug}`} className="flex items-center gap-2 text-purple-300 hover:text-purple-400 hover:underline flex-shrink min-w-0">
                  <FileText size={18} className="flex-shrink-0"/>
                  <span className="truncate">{post.slug}</span> 
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* social links section */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-700/50 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 + posts.length * 0.1, duration: 0.3 }}
        >
          <a href="https://freebrey.art" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Globe size={24} />
          </a>
          <a href="https://x.com/ctrl_cheeb_del" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Twitter size={24} />
          </a>
          <a href="https://github.com/ctrl-cheeb-del" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github size={24} />
          </a>
        </motion.div>

      </motion.div>
    </div>
  )
}

