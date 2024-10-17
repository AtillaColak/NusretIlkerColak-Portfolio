"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Book {
  "title-turkish": string
  "title-english": string
  description: string
  image: string
  link?: string | null
}

interface BookListProps {
  books: Book[]
}

export default function Component({ books = [] }: BookListProps) {
  const [languages, setLanguages] = useState<{ [key: number]: "english" | "turkish" }>({})
  const [currentPage, setCurrentPage] = useState(1)
  const booksPerPage = 9
  const totalPages = Math.ceil(books.length / booksPerPage)

  const toggleLanguage = (index: number) => {
    setLanguages((prevLanguages) => ({
      ...prevLanguages,
      [index]: prevLanguages[index] === "english" ? "turkish" : "english",
    }))
  }

  const indexOfLastBook = currentPage * booksPerPage
  const indexOfFirstBook = indexOfLastBook - booksPerPage
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook)

  return (
    <div className="h-full container mx-auto p-4 mt-2 flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
          {currentBooks.map((book, index) => {
            const language = languages[index] || "turkish"

            return (
              <Card key={index} className="flex flex-col h-full relative">
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute top-2 right-2 z-10"
                  onClick={() => toggleLanguage(index)}
                >
                  {language === "turkish" ? "English" : "Turkish"}
                </Button>

                <CardHeader className="p-0">
                  <div className="relative w-full pt-[56.25%]">
                    <Image
                      src={book.image}
                      alt={book[`title-${language}`]}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-t-lg"
                    />
                  </div>
                </CardHeader>

                <CardContent className="flex-grow p-4">
                  <CardTitle className="text-lg mb-2">{book[`title-${language}`]}</CardTitle>
                  <p className="text-sm text-muted-foreground">{book.description}</p>
                </CardContent>

                <CardFooter className="p-4 pt-0">
                  {book.link ? (
                    <Button asChild className="w-full bg-amber-700 hover:bg-amber-800">
                      <Link href={book.link} target="_blank" rel="noopener noreferrer">
                        Learn More
                      </Link>
                    </Button>
                  ) : (
                    <Button disabled className="w-full opacity-50 cursor-not-allowed bg-amber-600">
                      Learn More
                    </Button>
                  )}
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-8">
        <Button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="bg-amber-600 hover:bg-amber-700"
        >
          Previous
        </Button>

        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>

        <Button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="bg-amber-600 hover:bg-amber-700"
        >
          Next
        </Button>
      </div>
    </div>
  )
}