'use client'

import { Mail, MapPin } from "lucide-react"
import { useState, useEffect } from "react"

export default function Footer() {
  const [time, setTime] = useState(-1);

  useEffect(() => {
    setTime(new Date().getFullYear());
  }, []);


  return (
    <footer className="bg-[#f9f9f9]">
      <div className="max-w-6xl mx-auto">
        <div className="w-full h-px bg-gray-400" />
        <div className="px-4 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">NİÇ.</h2>
            <p className="text-sm text-gray-600 space-y-2">
      <span className="block">Law is order. ~ Aristotle</span>
      <span className="block">Good law is good order.</span>
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4" id="contact">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-gray-600" />
                <a href="mailto:team@andl.io" className="text-gray-600 hover:text-amber-600">
                  nilkercolak@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-gray-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600">Rotterdam, Netherlands</span>
              </li>
            </ul>
          </div>
          <div>
  <h3 className="font-semibold text-gray-900 mb-4">Socials</h3>
  <div className="flex space-x-4">
            <a
            href="https://x.com/nilkercolak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-amber-600"
            >
            <span className="sr-only">X (Twitter)</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            </a>
            <a
            href="https://www.linkedin.com/in/nilker-colak/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-amber-600"
            >
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            </a>
            <a
            href="https://scholar.google.com.tr/citations?user=5hIMqUAAAAAJ&hl=tr"
            target="_blank"
            rel="noopener noreferrer"
            >
              <span className="sr-only">Google Scholar</span>
              <svg className="h-6 w-6" fill="#d97706" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.573 2.729c-0.729 0.484-4.292 2.849-7.917 5.255s-6.589 4.396-6.589 4.422c0 0.026 0.182 0.146 0.406 0.266 0.224 0.13 3.797 2.109 7.953 4.411l7.542 4.193 0.193-0.099c0.109-0.052 2.891-1.641 6.188-3.521l5.99-3.427 0.036 10.599h3.557v-12.401l-4.615-3.094c-6.219-4.167-11.188-7.448-11.307-7.474-0.063-0.010-0.703 0.38-1.438 0.87zM7.141 22.177l0.016 2.672 8.828 5.292 8.891-5.339v-2.641c0-1.458-0.016-2.646-0.031-2.646-0.021 0-1.76 1.042-3.87 2.323l-4.406 2.661-0.578 0.339-1.755-1.052c-1.464-0.875-2.927-1.755-4.385-2.641l-2.672-1.615c-0.031-0.010-0.042 1.177-0.036 2.646z"></path> </g></svg>     
            </a>
        </div>
    </div>
        </div>
        <div className="px-4 py-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © {time} Nusret Ilker Colak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}