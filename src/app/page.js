import CategoriesPage from "./components/Categories";
import ChefSection from "./components/ChefSection";
import HeroSection from "./components/HeroSection";
import InstagramSection from "./components/InstagramSection";
import RecipesPage from "./components/Recipes";
import RecipeSection2 from "./components/RecipeSection2";
import SubscriptionSection from "./components/SubscriptionSection";



export default function Home() {

  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <CategoriesPage />
        <RecipesPage />
        <ChefSection />
        <InstagramSection />
        <RecipeSection2 />
        <SubscriptionSection />
      </div>
    </>
  );
}
