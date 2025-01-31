"use client"
import { useEffect } from "react";
import RecipeCard from "./Cards/RecipeCard";
import InstagramCard from "./Cards/InstagramCard";
import MainButton from "./Button/MainButton";
import InstagramIcon from "./icon/InstagramIcon";

 const products = [
    {
        "name": "Big and Juicy Wagyu Beef Cheeseburger",
        "img": "/images/instagram/Rectangle.png",
        "time": "30",
        "category":"Snack"
    },
    {
        "name": "Big and Juicy Wagyu Beef Cheeseburger",
        "img": "/images/instagram/Rectangle1.png",
        "time": "30",
        "category":"Snack"
    },
    {
        "name": "Big and Juicy Wagyu Beef Cheeseburger",
         "img": "/images/instagram/Rectangle2.png",
        "time": "30",
        "category":"Snack"
    },
    {
        "name": "Big and Juicy Wagyu Beef Cheeseburger",
       "img": "/images/instagram/Rectangle3.png",
        "time": "30",
        "category":"Snack"
    }
]

export default function InstagramSection() {

    useEffect(() =>{
    //  console.log(products, 'products');
    }, [])

  return (
     <div className="bg-gradient-to-b from-[#E7F9FD]/0 to-[#E7F9FD]">
         <div className="flex justify-center items-center mt-16 pt-16">
            <div className="mb-16 text-center">
              <h3 className="text-5xl font-semibold">Check out @foodieland on Instagram</h3>
              <p className="text-base font-normal text-gray-500 mt-6">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 lg:grid-cols-4 gap-8">
            {products?.map((product, index) =><InstagramCard key={index} product={product}/>)}
          </div>
          <div className="flex justify-center py-16">
            <MainButton text="Visit Our Instagram" icon={<InstagramIcon />}/>
          </div>
      </div>
  )
}
