'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { mainMenuItems } from '@/lib/dummyData'
import { IMenuItems } from '@/types/interfaces'
import MenuSections from './MenuSections'

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
      <div className="bg-white">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div>
            <img
              className="w-16 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
              alt="Logo"
            />
          </div>
          <div
            className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              {mainMenuItems.map((item: IMenuItems) => (
                <li
                  className="relative flex items-center gap-3 cursor-pointer"
                  key={item.id}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                >
                  <Link href="/" className="hover:text-[#4b47ff]">
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
        </nav>
      </div>

      {/* Submenu Section */}
      <div
        className={`transition-transform duration-300 ease-in-out bg-white mt-5 md:w-[70%] sm:w-[90%] m-auto p-10 rounded-lg z-50 ${hoveredMenuId ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        style={{
          transform: `translateY(${hoveredMenuId ? '0' : '-10px'})`,
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        }}
        onMouseLeave={handleMouseLeave}
      >
        {hoveredMenuId &&
          mainMenuItems
            .filter(
              item => item.id === hoveredMenuId && item.sections.length > 0,
            )
            .map((item) => <MenuSections item={item} />)}
      </div>
    </>
  )
}
