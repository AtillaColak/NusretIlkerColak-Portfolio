'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import resources from '@/public/resources.json' // Adjust the path to your resources.json file

interface Result {
  "title-turkish": string;
  "title-english": string;
  "body-turkish"?: string;
  description?: string;
  image?: string;
  link?: string;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('') // State for search query
  const [searchResults, setSearchResults] = useState<Result[]>([]);
  const searchRef = useRef<HTMLDivElement>(null); // Ref for the search results container

  const pathAssigner = (path: string) => {
      if(path.startsWith("/articles")) return "/publications/articles" 
      else return "/publications/declarations"; 
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchResults([]); // Clear search results when clicking outside
      }
    };

    // Add event listener for clicks
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchRef]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)

    if (query.length > 2) {
      // Filter results based on the query
      const filteredResults = resources.filter(resource =>
        resource['title-turkish'].toLowerCase().includes(query) ||
        resource['title-english'].toLowerCase().includes(query)
      )
      setSearchResults(filteredResults)
    } else {
      setSearchResults([])
    }
  }

  return (
    <div className=''>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className='text-xl font-semibold'>NİÇ.</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/NIC_resume.pdf" className="text-gray-600 hover:text-amber-600">CV</Link>
            <div className="relative group">
              <span className="text-gray-600 hover:text-amber-600 cursor-pointer">Publications</span>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/publications/books" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Books</Link>
                <Link href="/publications/articles" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Articles</Link>
                <Link href="/publications/declarations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Declarations</Link>
                <Link href="/publications/grand-istanbul" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Istanbul Analysis</Link>
              </div>
            </div>
            <a href="#contact" onClick={scrollToContact} className="text-gray-600 hover:text-amber-600">Contact</a>
          </nav>

          {/* Search Bar */}
          <div className="relative" ref={searchRef}>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="border border-amber-600 rounded px-3 py-1 text-sm placeholder:text-amber-800"
            />
            {/* Search Results Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute top-10 left-0 w-full bg-white shadow-lg z-50 rounded-md max-h-48 overflow-y-auto">
                {searchResults.map((result, index) => (
                  <Link
                    href={result['body-turkish'] ? pathAssigner(result['body-turkish']) : (result["link"]?.startsWith("./grand-istanbul") ? "/publications/".concat(result["link"].split("./")[1]) : "/publications/books")}
                    key={index}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => { setIsOpen(false); setSearchQuery(""); setSearchResults([]) }}
                  >
                    {result['title-english']}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white transition-opacity duration-300 z-40 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div className="flex flex-col space-y-2 p-4 mt-16">
          <Link href="/NIC_resume.pdf" className="block py-0 px-4 text-sm hover:bg-gray-100" onClick={() => setIsOpen(false)}>
            CV
          </Link>
          <Link href="/publications/books" className="block py-2 px-4 text-sm hover:bg-gray-100" onClick={() => setIsOpen(false)}>
            Books
          </Link>
          <Link href="/publications/articles" className="block py-2 px-4 text-sm hover:bg-gray-100" onClick={() => setIsOpen(false)}>
            Articles
          </Link>
          <Link href="/publications/declarations" className="block py-2 px-4 text-sm hover:bg-gray-100" onClick={() => setIsOpen(false)}>
            Declarations
          </Link>
          <Link href="/publications/grand-istanbul" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Istanbul Analysis
          </Link>
          <a
            href="#contact"
            onClick={(e) => {
              scrollToContact(e)
              setIsOpen(false)
            }}
            className="block py-2 px-4 text-sm hover:bg-gray-100"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
