'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Info } from "lucide-react"
import BookSection from "@/components/custom/book-section"
import provinces from "./istanbul.json"

export default function Istanbul() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-[#f9f9f9] mt-24 flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-semibold m-6">Grand Istanbul Analysis</h1>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="m-6"
              aria-label="Project Information"
            >
              <Info className="h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">Project Background</DialogTitle>
            </DialogHeader>
            <ScrollArea className="mt-4 h-[200px] pr-4">
              <DialogDescription className="text-sm leading-relaxed">
                <p className="mb-4">
                  This project provides an in-depth analysis of each municipality of Istanbul. It's a municipality-level look into my book "Analysis of Metropolitan Municipalities' Duties and Responsibilities in Istanbul."
                </p>
                <p className="mb-4">
                  The project covers various historical, cultural, and economic aspects to offer a comprehensive view of the province. The data and insights are gathered from reliable sources and aim to enhance understanding for researchers, students, and enthusiasts.
                </p>
                <p>
                  Each section provides detailed information about individual municipalities, their unique characteristics, challenges, and contributions to the greater Istanbul area.
                </p>
              </DialogDescription>
            </ScrollArea>
            <div className="mt-6 flex justify-end">
              <Button onClick={() => setIsOpen(false)}>Close</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <BookSection books={provinces} />
    </div>
  )
}