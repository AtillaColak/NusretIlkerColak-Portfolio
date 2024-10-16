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
  link?: string | null // Link is nullable or undefined
}

interface BookListProps {
  books: Book[]
}

export default function Component({ books = [] }: BookListProps) {
  // Store the language for each book card
  const [languages, setLanguages] = useState<{ [key: number]: "english" | "turkish" }>({})

  // Function to toggle the language for a specific card
  const toggleLanguage = (index: number) => {
    setLanguages((prevLanguages) => ({
      ...prevLanguages,
      [index]: prevLanguages[index] === "english" ? "turkish" : "english",
    }))
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 mb-8">
      {books.map((book, index) => {
        // Default to "turkish" if no language is set for this card
        const language = languages[index] || "turkish"

        return (
          <Card key={index} className="flex flex-col h-full relative">
            {/* Language toggle button */}
            <Button
              variant="outline"
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
              <div>
                <p className="text-sm text-muted-foreground">{book.description}</p>
              </div>
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
  )
}
