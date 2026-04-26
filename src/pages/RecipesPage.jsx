import { Search, SlidersHorizontal, Star } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import RecipeCard from "../components/RecipeCard";
import { pageArt, recipeLibrary } from "../data/siteData";

const categories = ["Breakfast", "Dinner", "Vegetarian", "Dessert", "Soup", "Bake"];

export default function RecipesPage() {
  return (
    <div className="pb-6">
      <section className="section-wrap pt-10 lg:pt-16">
        <div className="surface overflow-hidden rounded-[36px]">
          <div
            className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-10"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.92), rgba(255,247,237,0.78)), url(${pageArt.patternTile})`,
              backgroundSize: "cover",
            }}
          >
            <div>
              <SectionHeading
                eyebrow="Recipe library"
                title="Browse by craving, not by clutter."
                description="A roomy search surface, clear categories, and cards sized for quick comparison make the library feel useful even before you click."
              />
            </div>
            <div className="surface rounded-[30px] p-4 sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row">
                <label className="flex flex-1 items-center gap-3 rounded-full bg-cream px-4 py-4">
                  <Search size={18} className="text-olive" />
                  <input
                    type="text"
                    placeholder="Search noodles, cakes, soups..."
                    className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink/45"
                  />
                </label>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-olive px-5 py-4 text-sm font-semibold text-white"
                >
                  <SlidersHorizontal size={16} />
                  Filters
                </button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className="rounded-full border border-olive/10 bg-white px-4 py-2 text-sm font-semibold text-ink/72 transition hover:border-rust/30 hover:text-rust"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap mt-16">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {recipeLibrary.map((recipe, index) => (
            <RecipeCard
              key={recipe.title}
              recipe={{
                ...recipe,
                accent: [
                  "from-[#f4d4b7]/80 via-[#fff5e8] to-white",
                  "from-[#e7ddb9]/75 via-[#f9f3df] to-white",
                  "from-[#f1d1c8]/80 via-[#fff1eb] to-white",
                ][index % 3],
              }}
              compact
            />
          ))}
        </div>
      </section>

      <section className="section-wrap mt-20 grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "Editor notes",
            text: "Each card favors time, serving size, and a clean summary first so a cook can decide quickly.",
          },
          {
            title: "Balanced browsing",
            text: "Popular, seasonal, and pantry-friendly dishes sit together instead of hiding behind heavy sorting.",
          },
          {
            title: "Save-worthy details",
            text: "Ratings, descriptions, and category cues give the page enough signal to feel complete on its own.",
          },
        ].map((item) => (
          <article key={item.title} className="surface rounded-[28px] p-6">
            <Star size={18} className="text-rust" />
            <h3 className="headline mt-5 text-2xl text-ink">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-ink/68">{item.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
