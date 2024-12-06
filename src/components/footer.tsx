import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <p>&copy; 2023 LocalHelp. All rights reserved.</p>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="#" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

