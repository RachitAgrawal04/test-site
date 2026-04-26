import { ArrowRight, BookHeart, Flame, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import RecipeCard from "../components/RecipeCard";
import { communityNotes, featuredRecipes, pageArt, seasonalCollections } from "../data/siteData";

export default function HomePage() {
  return (
    <div className="pb-6">
      <section className="section-wrap grid gap-10 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-18">
        <div className="hero-card">
          <p className="eyebrow">Recipe sharing with soul</p>
          <h1 className="headline mt-4 max-w-3xl text-5xl leading-[1.02] text-ink sm:text-6xl xl:text-7xl">
            Keep the best things from your kitchen moving.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">
            Discover celebratory dinners, fast weekday favorites, and the tiny cooking notes people usually
            keep to themselves. Saffron Table makes recipes feel personal, not buried in a spreadsheet.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/recipes"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-olive px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(51,92,77,0.25)] transition hover:-translate-y-0.5"
            >
              Explore recipes
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/share"
              className="inline-flex items-center justify-center rounded-full border border-olive/15 bg-white/72 px-6 py-4 text-sm font-semibold text-ink transition hover:bg-white"
            >
              Publish your own
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Flame, value: "180+", label: "Seasonal dishes" },
              { icon: Users, value: "24k", label: "Kitchen members" },
              { icon: BookHeart, value: "96%", label: "Saved again" },
            ].map((item) => (
              <div key={item.label} className="surface rounded-[28px] p-5">
                <item.icon className="text-rust" size={20} />
                <p className="headline mt-5 text-3xl text-ink">{item.value}</p>
                <p className="mt-1 text-sm text-ink/62">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-6 top-8 hidden h-28 w-28 rounded-full bg-gold/25 blur-2xl lg:block" />
          <div className="surface relative overflow-hidden rounded-[34px] p-4">
            <div className="rounded-[28px] bg-[#f7ecdb] p-5">
              <img src={pageArt.heroArt} alt="Illustrated table with plated dishes" className="w-full rounded-[24px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap mt-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured tonight"
            title="A front page that feels alive, not stacked with filler."
            description="These picks are styled like something a human editor would actually champion: practical, rich in detail, and easy to browse quickly."
          />
          <Link to="/recipes" className="text-sm font-bold uppercase tracking-[0.18em] text-rust">
            View the full library
          </Link>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {featuredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      <section className="section-wrap mt-24 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="surface rounded-[34px] p-4">
          <div className="rounded-[28px] bg-[#f7e7d9] p-5">
            <img src={pageArt.gatherArt} alt="Illustrated community kitchen scene" className="w-full rounded-[24px]" />
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Seasonal shelves"
            title="Collections built around moods, tables, and real moments."
            description="Instead of endless filters alone, the site groups recipes by how people actually cook: what kind of night it is, who is coming over, and how much energy is left."
          />

          <div className="mt-8 grid gap-4">
            {seasonalCollections.map((collection) => (
              <div key={collection.title} className="surface rounded-[28px] p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="headline text-2xl text-ink">{collection.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-ink/68">{collection.blurb}</p>
                  </div>
                  <span className="rounded-full bg-olive px-4 py-2 text-sm font-semibold text-white">
                    {collection.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap mt-24">
        <SectionHeading
          eyebrow="From members"
          title="People stay for the notes."
          description="The strongest part of recipe sharing is usually the little context around a dish. This section makes those voices part of the experience."
          align="center"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {communityNotes.map((note) => (
            <article key={note.name} className="surface rounded-[30px] p-7">
              <p className="headline text-3xl text-rust">"</p>
              <p className="mt-3 text-base leading-8 text-ink/74">{note.quote}</p>
              <div className="mt-6 border-t border-olive/10 pt-5">
                <p className="font-bold text-ink">{note.name}</p>
                <p className="text-sm text-ink/58">{note.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
