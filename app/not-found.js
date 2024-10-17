import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="mt-32 flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-semibold">404 - Page Not Found</h1>
      <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
        <Link href="/">Go back to Home</Link>
      </Button>
    </div>
  )
}