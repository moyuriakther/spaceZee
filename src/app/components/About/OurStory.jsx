import Image from "next/image";
import Chef from "../../../../public/images/chef.png"


export default function OurStory() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
            <h3 className="text-5xl font-semibold">Our Story</h3>
            <p className="text-base font-normal text-gray-500 mt-6"> Founded by a group of passionate food lovers in 2024, Foodieland started with a simple mission: to make
            cooking accessible and enjoyable for everyone. We believe that good food has the power to bring people
            together and create lasting memories. </p>
            <p className="text-base font-normal text-gray-500 mt-6"> What began as a small collection of family recipes has grown into a vibrant community of food
            enthusiasts sharing their culinary adventures and discoveries.</p>
            <div className="grid grid-cols-2 gap-8 pt-6">
            <div>
                <p className="text-4xl font-bold text-[#DAA31A]">15K+</p>
                <p className="text-gray-600 mt-2">Recipes Available</p>
            </div>
            <div>
                <p className="text-4xl font-bold text-[#DAA31A]">8K+</p>
                <p className="text-gray-600 mt-2">Active Users</p>
            </div>
            </div>
        </div>
        <div className="relative h-[500px] rounded-2xl overflow-hidden">
        <Image src={Chef} alt="chef prepare food" className="object-cover"/>
        </div>
      </div>
    </div>
  )
}
