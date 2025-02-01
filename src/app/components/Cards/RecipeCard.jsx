"use client"
import Image from "next/image";
import clock from "../../../../public/images/icons/Timer.png"
import ForkKnife from "../../../../public/images/icons/ForkKnife.png"
import Heart from "../../../../public/images/icons/Heart.png"
import { useState } from "react";


export default function RecipeCard({product, compName}) {
    const [isFavorite, setIsFavorite] = useState(false)
    const {img, name, time, category} = product || {};
    const hasContent = name && time && category;
    const bgClass = compName === "recipe" ? "bg-gradient-to-b from-[#E7F9FD]/0 to-[#E7F9FD]" : "bg-white"
  return (
    <div className={`max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${bgClass}`}
   >
        {/* image container */}
       <div className="relative h-48 w-full">
            <Image 
                src={img && img}
                alt={name ? name : "card image"}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
            />
            <div className="absolute top-3 right-3 z-10 p-1 bg-white rounded-full backdrop-blur-sm">
                <Image 
                src={Heart}
                alt={"Heart"}
                height={24}
                width={24}
                className="hover:scale-110 transition-transform"
            />
            </div>
        </div>
        {/* content */}
        {hasContent && <div className="py-4 px-2">
            <h2 className="text-lg sm:text-sm lg:text-xl font-semibold text-black-800 mb-2">{name && name}</h2>
           <div className="flex items-center justify-between">
                <div className="flex items-center">
                <span className="text-gray-600 mr-2 "><Image 
                src={clock}
                alt="clock"
                height={18}
                width={18}
            /></span>
                    <p className="text-gray-600 font-medium">{time && time + " "+'Minutes'}</p>
                </div>
                <div className="flex items-center">
                <span className="text-gray-600 mr-2 "><Image 
                src={ForkKnife}
                alt="ForkKnife"
                height={18}
                width={18}
            /></span>
                    <p className="text-gray-600 font-medium">{category && category}</p>
                </div>

                <span className=""></span>
            </div>
        </div>}
    </div>
  )
}
