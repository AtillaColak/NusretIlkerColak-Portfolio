"use client";

import { usePathname } from 'next/navigation';
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import remarkGfm from 'remark-gfm';

// Function to escape quotes in the markdown content
const escapeMarkdownContent = (content: string) => {
  return content
    .replace(/'/g, '&apos;')  // Escape single quotes
    .replace(/"/g, '&quot;'); // Escape double quotes
}

export default function Province() {
  const pathname = usePathname(); // Get the full pathname
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    const fetchMarkdown = async (path: string) => {
      if (!path) return;
      try {
        const res = await fetch(path);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }

        const text = await res.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    // Extract the province from the pathname
    const province = pathname.split("/").pop(); // This gets the last segment of the pathname
    console.log("Fetching markdown for province:", province);

    if (province) {
      fetchMarkdown(`/istanbul/${province}.md`);
    } else {
      console.log("No province found in the path.");
    }
  }, [pathname]); // Listen for changes to pathname

  return (
    <div className={`h-full w-full flex flex-col items-center justify-center mt-48 mb-16`}>
      <ReactMarkdown className="prose dark:prose-invert" remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
        {escapeMarkdownContent(markdownContent) || "**Province Not Found!**"}
      </ReactMarkdown>
    </div>
  );
}
