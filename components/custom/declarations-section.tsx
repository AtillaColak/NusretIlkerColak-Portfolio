"use client"

import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import ReactMarkdown from "react-markdown"
import { Button } from "@/components/ui/button"

interface TitleItem {
  "title-turkish": string
  "title-english": string
  "body-turkish": string 
  "body-english"?: string | null // This will not be used
}

interface TitleListProps {
  items: TitleItem[]
}

export default function DeclarationSection({ items = [] }: TitleListProps) {
  const [selectedItem, setSelectedItem] = useState<TitleItem | null>(null)
  const [markdownContent, setMarkdownContent] = useState<string>("")
  const [language, setLanguage] = useState<"turkish" | "english">("english")
  
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 9
  const totalPages = Math.ceil(items.length / itemsPerPage)

  // Function to toggle the language (not used for body but kept for titles)
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "english" ? "turkish" : "english"))
  }

  // Fetch the Turkish markdown content when an item is selected
  useEffect(() => {
    const fetchMarkdown = async (path: string) => {
      if (!path) return;
      try {
        const res = await fetch(path)
        const text = await res.text()
        setMarkdownContent(text)
      } catch (error) {
        console.error("Error fetching markdown:", error)
      }
    }

    if (selectedItem) {
      // Only using the Turkish body path
      fetchMarkdown(selectedItem["body-turkish"]);
    }
  }, [selectedItem])

  // Get the items to display for the current page
  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="h-full container mx-auto p-4 mt-2 flex flex-col min-h-screen">
      {/* Flex grow to keep content area consistent */}
      <div className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
          {paginatedItems.map((item, index) => (
            <Dialog key={index} onOpenChange={() => {setMarkdownContent(""); setSelectedItem(null);}}>
              <DialogTrigger asChild>
                <Card
                  className="h-full flex-grow cursor-pointer hover:bg-accent transition-colors"
                  onClick={() => setSelectedItem(item)}
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold h-full flex-grow">
                      {item["title-english"]}
                    </CardTitle>
                    <CardTitle className="text-sm text-muted-foreground h-full flex-grow">
                      {item["title-turkish"]}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-5xl h-[90vh]"> {/* Increased height for the modal */}
                <DialogHeader>
                  <DialogTitle>
                    {item["title-english"]}
                  </DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-full pr-4">
                  <ReactMarkdown className="prose dark:prose-invert">
                    {markdownContent || "Loading..."}
                  </ReactMarkdown>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          ))}
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
