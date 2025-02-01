"use client"
import { useEffect } from "react";
import RecipeCard from "./Cards/RecipeCard";

 const products = [
    {
        "name": "Mixed Tropical Fruit Salad with Superfood Boosts",
        "img": "/images/deliciousRecipe/1.png",
        "time": "30",
        "category":"Healthy"
    },
    {
        "name": "Big and Juicy Wagyu Beef Cheeseburger",
        "img": "/images/deliciousRecipe/2.png",
        "time": "30",
        "category":"Western"
    },
    {
        "name": "Healthy Japanese Fried Rice with Asparagus",
        "img": "/images/deliciousRecipe/3.png",
        "time": "30",
        "category":"Healthy"
    },
    {
        "name": "Cauliflower Walnut Vegetarian Taco Meat",
        "img": "/images/deliciousRecipe/4.png",
        "time": "30",
        "category":"Eastern"
    },
    {
        "name": "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
        "img": "/images/deliciousRecipe/5.png",
        "time": "30",
        "category":"Healthy"
    },
    {
        "name": "Barbeque Spicy Sandwiches with Chips",
        "img": "/images/deliciousRecipe/6.png",
        "time": "30",
        "category":"Snack"
    },
    {
        "name": "Firecracker Vegan Lettuce Wraps - Spicy!",
        "img": "/images/deliciousRecipe/7.png",
        "time": "30",
        "category":"Seafood"
    },
    {
        "name": "Chicken Ramen Soup with Mushroom ",
        "img": "/images/deliciousRecipe/8.png",
        "time": "30",
        "category":"Japanese"
    },
   
]

export default function RecipeSection2() {

    useEffect(() =>{
    //  console.log(products, 'products');
    }, [])

  return (
     <div className="mb-16 pb-16">
         <div className="flex justify-center items-center mt-16 pt-16">
            <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-start sm:ml-2">
              <h3 className="text-4xl font-semibold">Try this delicious recipe <br /> to make your day</h3>
              <p className="text-base font-normal text-gray-400 mt-6">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 lg:grid-cols-4 gap-8">
            {products?.map((product, index) =><RecipeCard key={index} product={product} compName="recipe2"/>)}
          </div>
      </div>
  )
}
