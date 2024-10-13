'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/icon.svg" alt="Logo" width={40} height={40} />
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/cv" className="text-gray-600 hover:text-gray-900">CV</Link>
          <div className="relative group">
            <span className="text-gray-600 hover:text-gray-900 cursor-pointer">Publications</span>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link href="/publications/books" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Books</Link>
              <Link href="/publications/articles" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Articles</Link>
              <Link href="/publications/declarations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Declarations</Link>
            </div>
          </div>
          <a href="#contact" onClick={scrollToContact} className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <Link href="/cv" className="block py-2 px-4 text-sm hover:bg-gray-100">CV</Link>
          <div className="relative group">
            <span className="block py-2 px-4 text-sm hover:bg-gray-100">Publications</span>
            <div className="pl-4">
              <Link href="/publications/books" className="block py-2 px-4 text-sm hover:bg-gray-100">Books</Link>
              <Link href="/publications/articles" className="block py-2 px-4 text-sm hover:bg-gray-100">Articles</Link>
              <Link href="/publications/declarations" className="block py-2 px-4 text-sm hover:bg-gray-100">Declarations</Link>
            </div>
          </div>
          <a href="#contact" onClick={(e) => { scrollToContact(e); setIsOpen(false); }} className="block py-2 px-4 text-sm hover:bg-gray-100">Contact</a>
        </div>
      )}
    </header>
  )
}

export default Header