'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { mainMenuItems } from '@/lib/dummyData'
import { IMenuItems } from '@/types/interfaces'
import MenuSections from './MenuSections'
import { Button } from '@/components/ui/button'

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredMenuId, setHoveredMenuId] = useState<number | null>(null)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleMouseEnter = (id: number) => {
    const menuItem = mainMenuItems.find(item => item.id === id)
    if (menuItem && menuItem.sections.length > 0) {
      setHoveredMenuId(id)
    }
  }

  const handleMouseLeave = () => {
    setHoveredMenuId(null)
  }

  return (
    <>
      <nav className="w-full sticky top-0 bg-white" style={{zIndex:9999}}>
        <div className="flex justify-between items-center md:px-[10%] sm:px-[5%]">
          <div>
            {/* <img
              className="w-16 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
              alt="Logo"
            /> */}
            <h1 className='font-bold text-2xl my-4'><span className='text-[#1090CB]'>Next</span>Strapi</h1>
          </div>
          <div
            className={`nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              {mainMenuItems.map((item: IMenuItems) => (
                <li
                  className="relative flex items-center gap-3 cursor-pointer"
                  key={item.id}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                >
                  <Link href={item.link ? item.link:"/"} className="hover:text-[#4b47ff]">
                    {item.title}
                  </Link>
                  {item.sections.length > 0 && <IoIosArrowDown />}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <Button variant="outline">Sign in</Button>
            {menuOpen ? (
              <FaTimes
                onClick={handleToggleMenu}
                className="text-3xl cursor-pointer md:hidden"
              />
            ) : (
              <FaBars
                onClick={handleToggleMenu}
                className="text-3xl cursor-pointer md:hidden"
              />
            )}
          </div>
        </div>
      </nav>

      {/* Submenu Section */}
      <div
        className={`transition-transform duration-300 bg-white ease-in-out fixed left-0 right-0 w-full mt-2 md:w-[70%] sm:w-[90%] mx-auto p-10 rounded-lg ${hoveredMenuId ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        style={{
          top: '70px', // Adjust this value based on the height of your navbar
          transform: `translateY(${hoveredMenuId ? '0' : '-10px'})`,
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
          zIndex:9999
        }}
        onMouseLeave={handleMouseLeave}
      >
        {hoveredMenuId &&
          mainMenuItems
            .filter(
              item => item.id === hoveredMenuId && item.sections.length > 0,
            )
            .map(item => <MenuSections key={item.id} item={item} />)}
      </div>
    </>
  )
}
