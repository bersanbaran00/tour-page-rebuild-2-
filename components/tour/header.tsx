"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const commissaryLinks = [
    { name: "Kitchen Rental", href: "https://sharedkitchen.network/kitchen" },
    { name: "Storage", href: "https://sharedkitchen.network/storage" },
    { name: "Tour the Kitchen", href: "#", active: true },
    { name: "Food Truck", href: "https://sharedkitchen.network/food_truck" },
  ]

  const reservationsLinks = [
    { name: "Kitchen Time", href: "#" },
    { name: "Monthly Items", href: "#" },
  ]

  const directoryLinks = [
    { name: "Food Truck Directory", href: "https://sharedkitchen.network/salt-lake-area-food-truck-directory" },
    { name: "Catering Guide", href: "https://sharedkitchen.network/salt-lake-area-catering-guide" },
    { name: "Bakery Guide", href: "https://sharedkitchen.network/salt-lake-area-bakery-guide" },
    { name: "Meal Prep Service", href: "https://sharedkitchen.network/salt-lake-area-meal-prep-service-guide" },
    { name: "Delivery & Takeout", href: "https://sharedkitchen.network/salt-lake-area-delivery-takeout-guide" },
    { name: "Artisans Directory", href: "https://sharedkitchen.network/salt-lake-area-artisans" },
  ]

  return (
    <>
      {/* Support Bar - matches original exactly */}
      <div className="support-bar bg-[#2b468d]">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 max-w-[1400px]">
          <a
            href="tel:+1385-386-1233"
            className="flex items-center gap-2 text-white hover:text-[#c7d3f8] hover:underline text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2Z" />
            </svg>
            <span className="hidden sm:inline">TEXT US ANY TIME AT</span>
            <span className="ml-2">385-386-1233</span>
          </a>
          <div className="flex items-center">
            <button className="flex items-center gap-2 text-white hover:text-[#c7d3f8] hover:underline text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 1024 1024"
                fill="currentColor"
              >
                <path d="M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7c-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8c7-8.5 14.5-16.7 22.4-24.5c32.6-32.5 70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8c47.9 0 94.3 9.3 137.9 27.8c42.2 17.8 80.1 43.4 112.7 75.9c32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8c-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 0 1 520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 0 1 270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5c-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 0 1 0 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z" />
              </svg>
              <span className="hidden sm:inline">LOGIN</span>
              <span className="hidden md:inline">&nbsp;&nbsp;|&nbsp;&nbsp;CREATE ACCOUNT</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header - matches original exactly */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 max-w-[1400px]">
          {/* Logo */}
          <Link href="https://sharedkitchen.network" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Shared Kitchen Network"
              width={200}
              height={80}
              className="h-[60px] lg:h-[80px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Commissary Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("commissary")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-base font-medium text-gray-600 hover:text-[#2b468d] transition-colors">
                Commissary
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              {activeDropdown === "commissary" && (
                <div className="absolute left-0 top-full z-50 mt-1 w-48 rounded-md bg-white py-2 shadow-lg border">
                  {commissaryLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`block px-4 py-2 text-sm hover:bg-gray-100 ${link.active ? "text-[#2b468d] font-semibold" : "text-gray-600"}`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Reservations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("reservations")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-base font-medium text-gray-600 hover:text-[#2b468d] transition-colors">
                Reservations
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              {activeDropdown === "reservations" && (
                <div className="absolute left-0 top-full z-50 mt-1 w-48 rounded-md bg-white py-2 shadow-lg border">
                  {reservationsLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Directories Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("directories")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-base font-medium text-gray-600 hover:text-[#2b468d] transition-colors">
                Directories
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              {activeDropdown === "directories" && (
                <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-md bg-white py-2 shadow-lg border">
                  {directoryLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Schedule */}
            <Link
              href="#"
              className="px-3 py-2 text-base font-medium text-gray-600 hover:text-[#2b468d] transition-colors"
            >
              Schedule
            </Link>

            {/* Q & A */}
            <Link
              href="https://sharedkitchen.network/qa"
              className="px-3 py-2 text-base font-medium text-gray-600 hover:text-[#2b468d] transition-colors"
            >
              Q & A
            </Link>

            {/* Resources */}
            <Link
              href="https://sharedkitchen.network/resources/food-handlers-permits"
              className="px-3 py-2 text-base font-medium text-gray-600 hover:text-[#2b468d] transition-colors"
            >
              Resources
            </Link>

            {/* Cart Icon */}
            <button className="px-3 py-2 text-gray-600 hover:text-[#2b468d] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 512 512" fill="currentColor">
                <path d="m25.45 63.043l-4.364 17.463l8.73 2.18l60.624 15.16l29.402 44.1l62.44 187.32l-36.845 73.693h17.827a31.622 31.622 0 0 0-3.264 14c0 17.567 14.433 32 32 32s32-14.433 32-32c0-5.01-1.178-9.762-3.264-14h102.528a31.622 31.622 0 0 0-3.264 14c0 17.567 14.433 32 32 32s32-14.433 32-32c0-5.01-1.178-9.762-3.264-14H393v-18H174.562l23-46h192.924l70-210h-327.67L101.56 82.07L34.183 65.227l-8.733-2.184zm115.038 83.914H231v46h-75.178l-15.334-46zm108.512 0h78v46h-78v-46zm96 0h90.512l-15.334 46H345v-46zm-183.18 64H231v46h-53.846l-15.334-46zm87.18 0h78v46h-78v-46zm96 0h69.18l-15.334 46H345v-46zm-161.846 64H231v46h-32.514l-15.332-46zm65.846 0h78v46h-78v-46zm96 0h47.846l-15.332 46H345v-46zm-153 128c7.84 0 14 6.16 14 14s-6.16 14-14 14s-14-6.16-14-14s6.16-14 14-14zm160 0c7.84 0 14 6.16 14 14s-6.16 14-14 14s-14-6.16-14-14s6.16-14 14-14z" />
              </svg>
            </button>
          </nav>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2 text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                fill="currentColor"
              />
              <path
                opacity="0.3"
                d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-4 py-4 space-y-4">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Commissary</p>
                {commissaryLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block py-2 text-sm text-gray-600 hover:text-[#2b468d]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Reservations</p>
                {reservationsLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block py-2 text-sm text-gray-600 hover:text-[#2b468d]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Directories</p>
                {directoryLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block py-2 text-sm text-gray-600 hover:text-[#2b468d]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="pt-2 border-t">
                <Link href="#" className="block py-2 text-sm text-gray-600 hover:text-[#2b468d]">
                  Schedule
                </Link>
                <Link
                  href="https://sharedkitchen.network/qa"
                  className="block py-2 text-sm text-gray-600 hover:text-[#2b468d]"
                >
                  Q & A
                </Link>
                <Link
                  href="https://sharedkitchen.network/resources/food-handlers-permits"
                  className="block py-2 text-sm text-gray-600 hover:text-[#2b468d]"
                >
                  Resources
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
