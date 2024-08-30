import Image from 'next/image'
import React from 'react'
import linkICon from '../../../../public/pie.png'

function MenuSections({ item }: any) {
  return (
    <div key={item.id} className="flex gap-4">
      {item.sections.map((section: any) => (
        <div key={section.id}>
          <h1 className="text-base font-semibold mb-4 text-gray-500">
            {section.title.toUpperCase()}
          </h1>

          <>
            {section.links.map((link: any) => (
              <div
                key={link.name}
                className="py-2 px-3 flex items-center rounded-lg hover:bg-[#f6f6ff] gap-4 mb-2 cursor-pointer group"
              >
                <Image src={linkICon} alt="icon" />
                <div>
                  <h2 className="font-medium group-hover:text-[#4b47ff]">
                    {link.name}
                  </h2>
                  <p className="font-light text-sm">{link.description}</p>
                </div>
              </div>
            ))}
          </>
        </div>
      ))}
    </div>
  )
}

export default MenuSections
