import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { MenuIcon } from 'lucide-react'

export default function Header() {
  // State to toggle the menu visibility on small screens
  const [menuOpen, setMenuOpen] = useState(false)

  // Toggle the menu visibility
  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="bg-white bg-opacity-80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          LocalHelp
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-primary transition-colors">About</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-primary transition-colors">How It Works</Link></li>
          </ul>
        </nav>
        
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <MenuIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Sign Up Button */}
        <Button className="bg-primary text-white hover:bg-primary/90 hidden md:block">Sign Up</Button>
      </div>

      {/* Mobile Menu */}
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-md py-4 px-4`}>
        <ul className="flex flex-col space-y-4">
          <li><Link href="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link></li>
          <li><Link href="#" className="text-gray-600 hover:text-primary transition-colors">About</Link></li>
          <li><Link href="#" className="text-gray-600 hover:text-primary transition-colors">How It Works</Link></li>
        </ul>
        <div className="mt-4">
          <Button className="bg-primary text-white hover:bg-primary/90 w-full">Sign Up</Button>
        </div>
      </div>
    </header>
  )
}
