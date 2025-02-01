

export default function Description() {
  return (
  <section className="relative bg-sky-50 py-24">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block bg-[#F7EDD0] text-[#DAA31A] px-4 py-2 rounded-full text-base font-medium mb-6">About Foodieland</span>
                <h3 className="text-5xl font-semibold text-black">We're Passionate About Food</h3>
                <p className="text-base font-normal text-gray-500 mt-6"> Discover the story behind Foodieland and our mission to bring delicious, home-cooked meals to every table.</p>
                <p className="text-base font-normal text-gray-500 mt-6">So if you’re hungry for good food and great conversation with fellow cooks, we’re so happy you’re here! And there’s no better place to start than our community’s 75 Top-Rated Recipes of All Time, from five-star banana bread to our most-popular mac and cheese.</p>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L120,37.3C240,43,480,53,720,58.7C960,64,1200,64,1320,64L1440,64L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"
            ></path>
            </svg>
        </div>
    </section>
  )
}
