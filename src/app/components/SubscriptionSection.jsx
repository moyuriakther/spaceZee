import Image from "next/image";
import leftImage from "../../../public/images/salad-left.png"
import rightImage from "../../../public/images/salad-right.png"
import MainButton from "./Button/MainButton";


export default function SubscriptionSection() {
  return (
    <section className="relative flex justify-center items-center bg-[#E7F9FD] py-16 md:py-24 lg:py-20 mt-16 rounded-3xl">
         <div className="w-full max-w-3xl px-4">
            {/* left side image */}
            <Image src={leftImage} alt="left" className="absolute -left-0 bottom-0 md:w-40 lg:w-52 rounded-l-3xl hidden md:block"/>
            {/* right side image */}
            <Image src={rightImage} alt="right" className="absolute -right-0 bottom-0 md:w-40 lg:w-52 rounded-r-3xl hidden md:block"/>
             
              <h3 className="text-3xl md:text-5xl font-semibold text-black text-center">Deliciousness to your inbox</h3>
              <p className="text-base font-normal text-gray-500 mt-3 text-center">
                <span className="">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor</span>
                <span className=""> incididunt ut labore et dolore magna aliqut enim ad minim</span>
              </p>
             
              {/* subscription form */}
              <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-3">
                <div className="relative w-full md:w-2/3">
                    <input type="email" placeholder="Enter Your Email..." className="w-full px-6 pr-28 py-4 border border-gray-300 rounded-xl test-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white px-5 py-2 rounded-xl font-semibold hover:bg-gray-900 transition">Subscribe</button>
                </div>
              </div>
        </div>
    </section>
  )
}
