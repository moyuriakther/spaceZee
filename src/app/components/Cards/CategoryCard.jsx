import Image from "next/image"


export default function CategoryCard({category}) {
    const {name, img} = category || {}
  return (
    <div className="mb-32">
        <div className="flex justify-center items-center">
            <div className="p-8 max-w-[300px] mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-gradient-to-b from-[#E7F9FD]/0 to-[#E7F9FD]"
               >
            {/* image container */}
                <div className="relative h-24 w-24">
                    <Image 
                        src={img && img}
                        alt={name ? name : "card image"}
                        fill
                        // className="object-cover"
                        // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority
                    />
                
                </div>
                <p className="text-lg sm:text-sm lg:text-xl font-semibold text-black-800 pt-8 text-center">{name && name}</p>
            </div>
        </div>
    </div>
  )
}
