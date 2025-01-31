import CategoriesPage from "./components/Categories";
import RecipesPage from "./components/Recipes";



export default function Home() {

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-16">
      <CategoriesPage />
      <RecipesPage />
    </div>
  );
}
