import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import ReactMarkdown from 'react-markdown'

interface TextSectionProps {
  title: string
  body: string
}

export default function TextSection({ title, body }: TextSectionProps) {
  return (
    <Card className="w-full max-w-6xl mx-auto overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <CardContent className="p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-primary tracking-tight">{title}</h2>
        <div className="w-16 h-0.5 bg-primary rounded text-amber-600 bg-amber-600"></div>
        <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <ReactMarkdown className='prose'>{body}</ReactMarkdown>
        </div>
      </CardContent>
    </Card>
  )
}