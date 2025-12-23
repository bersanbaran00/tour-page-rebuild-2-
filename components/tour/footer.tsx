import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="footer">
      <div className="bg-[#2b468d]">
        <section className="text-white">
          <div className="container mx-auto text-left pt-16 px-5 max-w-[1200px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 border-b border-white/20 pb-10">
              {/* Logo and Description */}
              <div className="lg:col-span-1">
                <Image
                  src="https://sharedkitchen.network/assets/media/logos/logo-default.png"
                  alt="Shared Kitchen Network"
                  width={400}
                  height={100}
                  className="w-full max-w-[400px] bg-[#2b468d]"
                />
                <p className="text-white text-lg pt-4 leading-relaxed">
                  Empowering aspiring food entrepreneurs on their path to culinary success through beautiful, clean
                  shared kitchen spaces. Fostering a vibrant community, we cultivate creativity and collaboration
                  turning individual culinary dreams into thriving businesses.
                </p>
              </div>

              {/* Links */}
              <div>
                <h4 className="font-bold text-white mb-5 text-2xl">Links</h4>
                <p>
                  <Link
                    href="https://sharedkitchen.network/kitchen"
                    className="text-lg hover:text-[#c7d3f8] hover:underline"
                  >
                    KITCHEN RENTAL PRICING
                  </Link>
                </p>
                <p>
                  <Link
                    href="https://sharedkitchen.network/upcoming"
                    className="text-lg hover:text-[#c7d3f8] hover:underline"
                  >
                    KITCHEN LOCATION
                  </Link>
                </p>
                <p>
                  <Link
                    href="https://sharedkitchen.network/kitchen"
                    className="text-lg hover:text-[#c7d3f8] hover:underline"
                  >
                    KITCHEN AVAILABILITY
                  </Link>
                </p>
                <p>
                  <Link
                    href="https://sharedkitchen.network/food_truck"
                    className="text-lg hover:text-[#c7d3f8] hover:underline"
                  >
                    FOOD TRUCK PARKING
                  </Link>
                </p>
                <p>
                  <Link
                    href="https://sharedkitchen.network/kitchen"
                    className="text-lg hover:text-[#c7d3f8] hover:underline"
                  >
                    HOW TO GET STARTED
                  </Link>
                </p>
                <p>
                  <Link
                    href="https://sharedkitchen.network/tour"
                    className="text-lg hover:text-[#c7d3f8] hover:underline"
                  >
                    SCHEDULE A TOUR
                  </Link>
                </p>
                <p>
                  <Link
                    href="https://sharedkitchen.network/terms"
                    className="text-lg hover:text-[#c7d3f8] hover:underline"
                  >
                    TERMS AND CONDITIONS
                  </Link>
                </p>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-bold text-white mb-5 text-2xl">Services</h4>
                <p>
                  <Link
                    href="https://sharedkitchen.network/kitchen"
                    className="text-lg hover:text-[#c7d3f8] hover:underline"
                  >
                    COMMERCIAL KITCHEN
                  </Link>
                </p>
                <p>
                  <Link
                    href="https://sharedkitchen.network/storage"
                    className="text-lg hover:text-[#c7d3f8] hover:underline"
                  >
                    COLD STORAGE
                  </Link>
                </p>
                <p>
                  <Link
                    href="https://sharedkitchen.network/storage"
                    className="text-lg hover:text-[#c7d3f8] hover:underline"
                  >
                    DRY STORAGE
                  </Link>
                </p>
                <p>
                  <Link
                    href="https://sharedkitchen.network/express-catering-blueprint"
                    className="text-lg hover:text-[#c7d3f8] hover:underline"
                    target="_blank"
                  >
                    CATERING BLUEPRINT
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom section */}
        <div className="container mx-auto px-5 py-8 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Social Media */}
            <div>
              <p className="text-white text-xl mb-4">Our Social Media Links:</p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61561351930758"
                  className="text-white hover:text-[#c7d3f8]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/sharedkitchennetwork"
                  className="text-white hover:text-[#c7d3f8]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@sharedkitchennetwork"
                  className="text-white hover:text-[#c7d3f8]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact and Approvals */}
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="text-center sm:text-right">
                <p className="text-white text-xl mb-4">Text Us Your Message At:</p>
                <a
                  href="tel:+1385-386-1233"
                  className="inline-block bg-white text-[#2b468d] font-semibold px-8 py-2 rounded-full text-lg hover:bg-gray-100 transition-colors"
                >
                  385-386-1233
                </a>
              </div>
              <div className="text-center sm:text-right">
                <p className="text-white text-xl mb-4">Our Kitchen Approved By:</p>
                <div className="flex gap-2">
                  <Image
                    src="https://sharedkitchen.network/assets/img/approve1.png"
                    alt="Approval 1"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                  <Image
                    src="https://sharedkitchen.network/assets/img/approve2.png"
                    alt="Approval 2"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#1a1a2e] text-center text-white text-lg py-8">
        © 2023{" "}
        <a href="https://sharedkitchen.network" className="font-bold hover:underline">
          Shared Kitchen Network
        </a>
        , All Rights Reserved
      </div>
    </footer>
  )
}
