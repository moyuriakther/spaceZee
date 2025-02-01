import Image from "next/image";
import heroImg from "../../../public/images/hero.png"
import clock from "../../../public/images/icons/Timer.png"
import ForkKnife from "../../../public/images/icons/ForkKnife.png"
import John from '../../../public/images/john.png'
import PlayIcon from '../../../public/images/icons/PlayCircle.png'
import HeroLogo from "../../../public/images/hero-logo.png"
import MainButton from "./Button/MainButton";
import Badge from "../../../public/images/Badge.png"



export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 pt-8 pb-16 mb-16">
        <div className="relative rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-0 p-8 items-center">
                <div className="space-y-4 bg-sky-50 md:rounded-l-2xl px-8 py-8">
                    <div className="pl-4">
                     <Image 
                        src={HeroLogo}
                        alt="HeroLogo"
                        className="w-24 h-24 rounded-full object-cover"
                    />
                    <h3 className="text-5xl font-semibold text-black">Spicy delicious chicken wings</h3>
                    <p className="text-base font-normal text-gray-500 mt-6">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    <div className="flex flex-row gap-8 items-start sm:items-center py-8">
                        <div className="flex items-center rounded-full bg-gray-200">
                            <span className="rounded-full p-3 bg-white/20">
                                <Image 
                                src={clock}
                                alt="clock"
                                height={18}
                                width={18}
                                />
                            </span>
                            <p className="text-gray-600 pr-2 font-medium">{30 + " "+'Minutes'}</p>
                        </div>
                        <div className="flex items-center rounded-full bg-gray-200 pr-4">
                            <span className="text-gray-600 mr-2 p-3">
                            <Image 
                            src={ForkKnife}
                            alt="ForkKnife"
                            height={18}
                            width={18}
                            /></span>
                            <p className="text-gray-600 font-medium">Chiken</p>
                        </div>
                    </div>
                    <div className="flex justify-between pt-8">
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
                <div className="relative h-auto md:h-full w-full min-h-[300px] md:min-h-[auto]">
                    <Image 
                        src={heroImg}
                        alt="hero image"
                        priority
                        fill
                        className={`md:rounded-r-2xl object-cover h-full w-full`}
                        />
                </div>
            </div>
           <div className="hidden sm:block absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image src={Badge} alt="badge" className="w-20 h-20"/>
           </div>
        </div>
    </section>
  )
}
