import Image from "next/image";
import heroImg from "../../../public/images/hero.png"
import clock from "../../../public/images/icons/Timer.png"
import ForkKnife from "../../../public/images/icons/ForkKnife.png"
import John from '../../../public/images/john.png'
import PlayIcon from '../../../public/images/icons/PlayCircle.png'
import HeroLogo from "../../../public/images/hero-logo.png"
import MainButton from "./Button/MainButton";



export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-white mb-16 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl h-full mx-auto grid md: grid-cols-2 gap-0 items-center">
                {/* content */}
            {/* <div className="relative z-10 h-full flex items-end pb-12 md:pb-24 px-4 sm:px-6 lg:px-8"> */}
            <div className="items-center md: text-left bg-[#E7FAFE]">
                <div className="max-w-7xl mx-auto w-full">
                    {/* <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">Hot Recipes</span> */}
                     <Image 
                                src={HeroLogo}
                                alt="HeroLogo"
                                className="w-24 h-24 rounded-full object-cover"
                            />
                    <h3 className="text-5xl font-semibold text-black">Spicy delicious chicken wings</h3>

                    <p className="text-lg md: text-xl mb-8 max-w-2xl mx-auto opacity-90 font-normal text-gray">
                        <span className="block">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod </span>
                        <span className="block"> tempor incididunt ut labore et dolore magna aliqut enim ad minim</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                        <div className="flex items-center">
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
                            <span className="text-gray-600 mr-2 ">
                            <Image 
                            src={ForkKnife}
                            alt="ForkKnife"
                            height={18}
                            width={18}
                            /></span>
                            <p className="text-gray-600 font-medium">Chiken</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-4 mb-8">
                            <Image 
                                src={John}
                                alt="john"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-medium text-black">John Smith</p>
                                <p className="text-sm text-gray-600">15 March 2024</p>
                            </div>
                        </div>
                        <MainButton text="View Recipes" style={"mb-8"} icon={<Image 
                             src={PlayIcon}
                                alt="PlayIcon"
                                className="ml-3 w-5 h-5 rounded-full object-cover"
                            />}/>
                    </div>
                </div>
            </div>
            <div className="relative h-96 w-full rounded-xl overflow-hidden shodow-lg">
                <Image 
                src={heroImg}
                alt="hero image"
                fill
                priority
                className="object-cover"
                />
            </div>
        </div>
    </section>
  )
}
