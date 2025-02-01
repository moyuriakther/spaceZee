import RecipeCard from "./Cards/RecipeCard";

 const products = [
    {
        "name": "Big and Juicy Wagyu Beef Cheeseburger",
        "img": "/images/recipes/1.png",
        "time": "30",
        "category":"Snack"
    },
    {
        "name": "Fresh Lime Roasted Salmon with Ginger Sauce",
        "img": "/images/recipes/2.png",
        "time": "30",
        "category":"Fish"
    },
    {
        "name": "Strawberry Oatmeal Pancake with Honey Syrup",
        "img": "/images/recipes/3.png",
        "time": "30",
        "category":"Breakfast"
    },
    {
        "name": "Fresh and Healthy Mixed Mayonnaise Salad",
        "img": "/images/recipes/4.png",
        "time": "30",
        "category":"Healthy"
    },
    {
        "name": "Chicken Meatballs with Cream Cheese",
        "img": "/images/recipes/5.png",
        "time": "30",
        "category":"Meat"
    },
    {
        "name": "Chicken and Vagitable Salad",
        "img": "/images/recipes/6.png",
        "time": "30",
        "category":"Healthy"
    },
    {
        "name": "Fruity Pancake with Orange & Blueberry",
        "img": "/images/recipes/7.png",
        "time": "30",
        "category":"Sweet"
    },
    {
        "name": "The Best Easy One Pot Chicken and Rice",
        "img": "/images/recipes/8.png",
        "time": "30",
        "category":"Snack"
    },
    {
        "name": "The Creamiest Creamy Chicken and Bacon Pasta",
        "img": "/images/recipes/9.png",
        "time": "30",
        "category":"Noodles"
    },
   
]

export default function RecipesPage() {

   
  return (
     <div>
         <div className="flex justify-center items-center">
            <div className="mb-16 text-center">
              <h3 className="text-5xl font-semibold">Simple and tasty recipes</h3>
              <p className="text-base font-normal text-gray-500 mt-6">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqut enim ad minim </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 lg:grid-cols-4 gap-8">
            {products?.map((product, index) =><RecipeCard key={index} product={product} compName="recipe"/>)}
          </div>
      </div>
  )
}
