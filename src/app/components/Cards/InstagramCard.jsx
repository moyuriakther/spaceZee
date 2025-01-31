
import Image from "next/image";



export default function InstagramCard({product}) {
    // const [isFavorite, setIsFavorite] = useState(false)
    const {img, name, time, category} = product || {};
        
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden"
   >
        {/* image container */}
       <div className="flex items-center p-4">
           <div className="h-8 w-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-sm">F</span>
           </div>
            <div className="ml-3">
                <div className="flex items-center">
                    <p className="font-semibold text-sm">Foodieland</p>
                     <svg className="h-4 w-4 ml-1 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                </div>
                <p className="text-xs text-gray-500">Tokyo, Japan</p>
            </div>
            <button className="ml-auto">
                 <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
            </button>
        </div>

        {/* image */}
        <div className="relative h-48 w-full">
            <Image src={img} 
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority/>
            <div className="absolute top-3 right-3 bg-black/60 text-white px-2 py-1 rounded-full text-xs">1/3</div>
        </div>
        {/* icons */}
        <div className="p-4">
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center space-x-4">
                    <button className="hover:opacity-75 transition-opacity">
                         <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                    </button>
                    <button className="hover:opacity-75 transition-opacity">
                         <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                        </svg>
                    </button>
                    <button className="hover:opacity-75 transition-opacity">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                            />
                        </svg>
                    </button>
                    <button className="hover:opacity-75 transition-opacity">
                         <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                            />
                            </svg>
                    </button>
                </div>
            </div>
                            {/* content */}
                <p className="font-semibold text-sm mb-2">Liked by craig_love and 44,686 others</p>
                {/* caption */}
                <div className="space-y-2">
                    <p className="text-sm">
                        <span className="font-semibold">Foodieland: </span>
                        What are you doing before start cooking? prepare the  tools or ingredients?
                    </p>
                    <p className="text-xs text-gray-500"> September 19</p>
                </div>
        </div>
    </div>
  )
}
