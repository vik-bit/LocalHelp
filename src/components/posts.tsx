'use client'
import { useState } from 'react'

// Dummy data for posts
const dummyPosts = [
  { id: '1', title: 'Need a ladder', category: 'Tools' },
  { id: '2', title: 'Offer a ride to station', category: 'Transport' },
  { id: '3', title: 'Can lend a drill', category: 'Tools' },
  { id: '4', title: 'Looking for pet sitting', category: 'Pet Care' },
  { id: '5', title: 'Looking for a ride', category: 'Transport' },
  { id: '6', title: 'Share some food', category: 'Food Sharing' },
]

export default function Posts() {
  const [searchQuery, setSearchQuery] = useState<string>('') // Search query state
  const [selectedCategory, setSelectedCategory] = useState<string>('') // Category filter state

  // Function to handle category filter change
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value)
  }

  // Filter posts based on search query and selected category
  const filteredPosts = dummyPosts.filter((post) => {
    const matchesSearchQuery = post.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true
    return matchesSearchQuery && matchesCategory
  })

  return (
    <div className="container mx-auto px-4">
      {/* Search Bar and Category Dropdown in a single row for larger screens, stacked for smaller screens */}
      <div className="mb-6 flex flex-col sm:flex-row sm:gap-4">
        {/* Search Bar */}
        <input
          type="text"
          className="w-full sm:w-[70%] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 sm:mb-0"
          placeholder="Search posts by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Category Dropdown Filter */}
        <select
          className="w-full sm:w-[30%] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          <option value="Tools">Tools</option>
          <option value="Transport">Transport</option>
          <option value="Pet Care">Pet Care</option>
          <option value="Food Sharing">Food Sharing</option>
        </select>
      </div>

      {/* Display filtered posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.length === 0 ? (
          <p className="text-gray-600 text-center">No posts found</p>
        ) : (
          filteredPosts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-4">Category: {post.category}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Contact
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
