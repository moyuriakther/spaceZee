import Image from "next/image";
import MainButton from "./Button/MainButton";
import ChefImage from "../../../public/images/chef.png"


export default function ChefSection() {
  return (
   <div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mt-16 pt-16">
        <div className="flex justify-start items-center">
           <div>
                <h3 className="text-5xl font-semibold text-black">Everyone can be a chef in their own kitchen</h3>
                <p className="text-lg md: text-xl mb-8 max-w-2xl mx-auto opacity-90 font-normal text-gray py-4">
                    <span className="block">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do</span>
                    <span className="block">eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</span>
                </p>
                <MainButton text="Learn More"/> 
           </div>
        </div>
        <div>
            {/* <div className="relative h-96 w-full rounded-xl overflow-hidden shodow-lg"> */}
                <Image 
                src={ChefImage}
                alt="Chef image"
                // fill
                // priority
                // className="object-cover"
                />
            {/* </div>  */}
        </div>
    </div>
   </div>
  )
}
