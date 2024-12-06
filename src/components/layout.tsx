'use client'
import { ReactNode, useState } from 'react'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }: { children: ReactNode }) {
  // States for filtering and searching
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  // Categories for filtering (can be customized as needed)
  const categories = ['All', 'Tools', 'Transport', 'Emergency', 'Food', 'Services']

  // Filtering and searching functionality
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <Header />
      <main className="flex-grow p-6">
      

        {/* Content Rendering */}
        <div className="space-y-4">
          {/* Filtered Content */}
          {children}

          {/* If needed, you can implement logic to filter displayed content based on `searchQuery` and `selectedCategory` */}
        </div>
      </main>
      <Footer />
    </div>
  )
}
