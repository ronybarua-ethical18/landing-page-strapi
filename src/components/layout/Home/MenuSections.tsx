import Image from 'next/image'
import React from 'react'
import linkICon from '../../../../public/pie.png'


function MenuSections({ item }: any) {
  const dropdownMenus = item?.map((i: any) => i.attributes)

  return (
    <div key={item.id} className="flex gap-4">
      {dropdownMenus?.map((section: any) => (
        <div key={section.id}>
          <h1 className="text-base font-semibold mb-4 text-gray-500">
            {section.heading?.toUpperCase()}
          </h1>

          {section.links?.map((link: any) => (
            <div
              key={link.id}
              className="px-3 flex items-center rounded-lg hover:bg-[#f6f6ff] gap-4 mb-2 cursor-pointer group"
            >
              {link?.icon?.data?.attributes?.url ? (
                <Image
                src={`http://localhost:1337${link.icon.data.attributes.url}`}
                alt={`${link.name} icon`}
                width={80} // Set the width or height, depending on your layout needs
                height={80} // Adjust height based on the original ratio, or leave it blank
                layout="intrinsic" // Ensures the image maintains its original aspect ratio
              />
              
              ) : (
                <Image 
                  src={linkICon} 
                  alt="default icon" 
                />
              )}
              <div>
                <h2 className="font-medium group-hover:text-[#4b47ff]">
                  {link.name}
                </h2>
                <p className="font-light text-sm">{link.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default MenuSections
