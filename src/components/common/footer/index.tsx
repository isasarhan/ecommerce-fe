import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Shop</h3>
            <div className="mt-4 space-y-3">
              <Link href="#" className="block text-sm text-gray-500 hover:text-gray-900">
                New Arrivals
              </Link>
              <Link href="#" className="block text-sm text-gray-500 hover:text-gray-900">
                Best Sellers
              </Link>
              <Link href="#" className="block text-sm text-gray-500 hover:text-gray-900">
                Sale & Special Offers
              </Link>
              <Link href="#" className="block text-sm text-gray-500 hover:text-gray-900">
                Men's Collection
              </Link>
              <Link href="#" className="block text-sm text-gray-500 hover:text-gray-900">
                Women's Collection
              </Link>
              <Link href="#" className="block text-sm text-gray-500 hover:text-gray-900">
                Accessories
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Customer Service</h3>
            <div className="mt-4 space-y-3">
              <Link href="#" className="block text-sm text-gray-500 hover:text-gray-900">
                Help Center
              </Link>
              <Link href="#" className="block text-sm text-gray-500 hover:text-gray-900">
                Track Your Order
              </Link>
              <Link href="#" className="block text-sm text-gray-500 hover:text-gray-900">
                Shipping & Delivery
              </Link>
              <Link href="#" className="block text-sm text-gray-500 hover:text-gray-900">
                Returns & Exchanges
              </Link>
              <Link href="#" className="block text-sm text-gray-500 hover:text-gray-900">
                Contact Us
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">About Us</h3>
            <div className="mt-4 space-y-3">
              <Link href="#" className="block text-sm text-gray-500 hover:text-gray-900">
                Our Story
              </Link>
              <Link href="#" className="block text-sm text-gray-500 hover:text-gray-900">
                Sustainability
              </Link>
              <Link href="#" className="block text-sm text-gray-500 hover:text-gray-900">
                Careers
              </Link>
              <Link href="#" className="block text-sm text-gray-500 hover:text-gray-900">
                Press
              </Link>
              <Link href="#" className="block text-sm text-gray-500 hover:text-gray-900">
                Blog
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Stay Connected</h3>
            <p className="mt-4 text-sm text-gray-500">Subscribe to our newsletter for exclusive offers and updates.</p>
            <form className="mt-4">
              <div className="flex max-w-md gap-x-2">
                <Input type="email" placeholder="Enter your email" className="min-w-0 flex-auto" required />
                <Button type="submit">Subscribe</Button>
              </div>
            </form>
            <div className="mt-6">
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <X className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-sm text-gray-500">
              <Phone className="mr-2 h-4 w-4" />
              <span>+1 (888) 123-4567</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Mail className="mr-2 h-4 w-4" />
              <span>support@yourstore.com</span>
            </div>
            <div className="hidden md:flex items-center text-sm text-gray-500">
              <MapPin className="mr-2 h-4 w-4" />
              <span>123 Commerce St, City, State 12345</span>
            </div>
          </div>

          <Separator />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-4">
            
            <div className="mt-4 flex space-x-6 md:mt-0">
              <Link href="#" className="text-xs text-gray-500 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-gray-500 hover:text-gray-900">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-gray-500 hover:text-gray-900">
                Shipping Policy
              </Link>
              <Link href="#" className="text-xs text-gray-500 hover:text-gray-900">
                Refund Policy
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
