import React from 'react'

export default function draft() {
  return (
   <div>
                  {/* content */}
              <div className="relative z-10 h-full flex items-end pb-12 md:pb-24 px-4 sm:px-6 lg:px-8">
                  <div className="max-w-7xl mx-auto w-full text-white">
                      <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">Hot Recipes</span>
                      <h3 className="text-5xl font-semibold">Spicy delicious chicken wings</h3>
  
                      <p className="text-lg md: text-xl mb-8 max-w-2xl mx-auto opacity-90">
                          <span className="block">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod </span>
                          <span className="block"> tempor incididunt ut labore et dolore magna aliqut enim ad minim</span>
                      </p>
                      <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                          <div className="flex items-center gap-3">
                              <span className="rounded-full p-3 bg-white/20">
                                  <Image 
                                  src={clock}
                                  alt="clock"
                                  height={18}
                                  width={18}
                                  />
                              </span>
                              <p className="text-gray-600 font-medium">{30 + " "+'Minutes'}</p>
                          </div>
                          <div className="flex items-center">
                              <span className="text-gray-600 mr-2 "><Image 
                              src={ForkKnife}
                              alt="ForkKnife"
                              height={18}
                              width={18}
                              /></span>
                              <p className="text-gray-600 font-medium">Chiken</p>
                          </div>
                      </div>
                  </div>
              </div>
                  <div className="absolute inset-0 z-0">
                      <div className="relative h-full w-full">
                          <Image 
                          src={heroImg}
                          alt="hero image"
                          fill
                          priority
                          className="object-cover"
                          />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"/>
                  </div>
              </div>
          </div>
  )
}
