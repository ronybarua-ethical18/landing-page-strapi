'use client'

import { useState } from 'react'
import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io'
import { Button } from '@/components/ui/button'
import MenuSections from './MenuSections'
import { usePathname } from 'next/navigation'

export default function TopBar({ strapiMenuData }: any) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)

  const handleMouseEnter = (title: string) => {
    const menuItem = strapiMenuData?.MainMenuItems.find((item:any) => item.title === title)
    if (menuItem && menuItem?.sections?.data?.length > 0) {
      setHoveredMenu(title)
    }
  }

  const handleMouseLeave = () => {
    setHoveredMenu(null)
  }

  // Extract sections by type
  const logoSection = strapiMenuData?.MainMenuItems?.find((item:any) => item.__component === 'menu.logo-section')
  const dropdownOrMenuLinks = strapiMenuData?.MainMenuItems?.filter((item:any) => item.__component === 'menu.dropdown' || item.__component === 'menu.menu-link')
  const menuButtons = strapiMenuData?.MainMenuItems?.filter((item:any) => item.__component === 'menu.menu-button')

  return (
    <>
      <nav className="w-full sticky top-0 bg-white" style={{ zIndex: 9999 }}>
        <div className="flex justify-between items-center md:px-[10%] sm:px-[5%]">
          {logoSection && (
            <div>
              <Link href={'/'} className="hover:text-[#4b47ff]">
                <h1 className="font-bold text-2xl my-4">
                  {logoSection.title}
                </h1>
              </Link>
            </div>
          )}
          {dropdownOrMenuLinks?.length > 0 && (
            <div
              className={`nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}
            >
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                {dropdownOrMenuLinks?.map((item: any) => (
                  <li
                    className="relative flex items-center gap-3 cursor-pointer"
                    key={item.title}
                    onMouseEnter={() => handleMouseEnter(item.title)}
                    // onMouseLeave={handleMouseLeave}
                  >
                    <Link href={item.url ? item.url : '/'}>
                      <div className="relative flex items-center">
                        {/* Active green dot */}
                        {item?.url?.includes(pathname) && (
                          <span className="absolute top-[-3px] left-[-10px] w-2 h-2 bg-green-500 rounded-full"></span>
                        )}

                        <span
                          className={`hover:text-[#4b47ff] ${item?.url?.includes(pathname) ? 'text-[#4b47ff] font-medium' : ''}`}
                        >
                          {item.title}
                        </span>
                      </div>
                    </Link>

                    {/* Ensure sections are checked */}
                    {item?.sections?.data?.length > 0 && (
                      <IoIosArrowDown className="ml-1" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {menuButtons?.length > 0 && (
            <div className="flex items-center gap-6">
              {menuButtons?.map((button: any) => (
                <Link href={button.link ? button.link : '/'} key={button.id}>
                  <Button
                    variant={button.type}
                    className={`hover:bg-[#1090CB] hover:text-white ${button.type ==="white" ?"border-[#1090cb] hover:bg-white hover:text-[#1090cb]":""}`}
                  >
                    {button.title}
                  </Button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Submenu Section */}
      <div
        className={`transition-transform duration-300 bg-white ease-in-out fixed left-0 right-0 w-full mt-2 md:w-[70%] sm:w-[90%] mx-auto p-10 rounded-lg ${hoveredMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        style={{
          top: '70px', // Adjust this value based on the height of your navbar
          transform: `translateY(${hoveredMenu ? '0' : '-10px'})`,
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
          zIndex: 9999,
        }}
        onMouseLeave={handleMouseLeave}
      >
        {hoveredMenu &&
          strapiMenuData?.MainMenuItems
            .filter((item:any) => item.title === hoveredMenu && item?.sections?.data?.length > 0)
            .map((item:any) => <MenuSections key={item.title} item={item?.sections?.data} />)}
      </div>
    </>
  )
}
