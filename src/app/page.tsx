'use client'
import Layout from '../components/layout'
import MapPlaceholder from '../components/map-placeholder'
import CategoryCard from '../components/category-card'
import { Button } from "@/components/ui/button"
import { PenToolIcon as Tool, Car, PawPrint, Utensils } from 'lucide-react'
import Posts from '../components/posts'
import { useState } from 'react'

export default function Home() {
  

  const [searchQuery, setSearchQuery] = useState('');

 

  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Welcome to LocalHelp</h1>
            <p className="text-xl text-gray-600 mb-10">Connect with your community, share resources, and help each other out</p>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 transform hover:scale-105 transition-all">Get Started</Button>
          </div>
          <MapPlaceholder />
        </div>
      </section>

      <section className="py-20 bg-white bg-opacity-60 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">How can you help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CategoryCard
              title="Tools"
              description="Lend or borrow tools for your projects"
              icon={<Tool className="w-6 h-6" />}
            />
            <CategoryCard
              title="Transport"
              description="Offer or request rides in your area"
              icon={<Car className="w-6 h-6" />}
            />
            <CategoryCard
              title="Pet Care"
              description="Help with pet sitting or dog walking"
              icon={<PawPrint className="w-6 h-6" />}
            />
            <CategoryCard
              title="Food Sharing"
              description="Share surplus food or meals with neighbors"
              icon={<Utensils className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-14 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Nearby Posts</h2>

          
          {/* Display filtered posts */}
          <Posts/>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-100 to-purple-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Ready to get involved?</h2>
          <p className="text-xl text-gray-600 mb-10">Join LocalHelp today and start making a difference in your community</p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 transform hover:scale-105 transition-all">Sign Up Now</Button>
        </div>
      </section>
    </Layout>
  )
}
