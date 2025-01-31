import CategoryCard from "./Cards/CategoryCard"

const categories = [
    {
        "img": "/images/categories/category1.png",
        "name": "Breakfast"
    },
    {
        "img": "/images/categories/category2.png",
        "name": "Vegan"
    },
    {
        "img": "/images/categories/category3.png",
        "name": "Meat"
    },
    {
        "img": "/images/categories/category4.png",
        "name": "Dessert"
    },
    {
        "img": "/images/categories/category5.png",
        "name": "Lunch"
    },
    {
        "img": "/images/categories/category6.png",
        "name": "Chocolete"
    },
]
export default function CategoriesPage() {
  return (
    <div className="mb-16 pb-16">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-8 md:gap-12 mb-16">
            <h3 className="text-5xl font-semibold">Categories</h3>
            <button className="bg-[#E7FAFE] hover:bg-[#E7FAFE] text-black rounded-xl px-6 py-4 text-sm font-semibold transition-colors">View All Categories</button>
        </div>
       <div className="grid grid-cols-2 md:grid-cols-6 sm:grid-cols-4 xs:grid-cols-2 lg:grid-cols-6 gap-2 sm:gap-4 xs:gap-4">
            {categories?.map((category, i) => <CategoryCard key={i} category={category}/>)}
        </div>
    </div>
  )
}
