import { Clock3, Sparkles } from "lucide-react";

export default function RecipeCard({ recipe, compact = false }) {
  return (
    <article
      className={`surface stagger-in overflow-hidden rounded-[30px] ${
        compact ? "p-5" : "p-6 sm:p-7"
      }`}
    >
      <div className={`rounded-[24px] bg-gradient-to-br ${recipe.accent ?? "from-oat via-white to-blush"} p-5`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-olive/65">
              {recipe.category ?? recipe.author}
            </p>
            <h3 className="headline mt-3 text-2xl leading-tight text-ink">{recipe.title}</h3>
          </div>
          <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-rust">
            {recipe.rating ? `${recipe.rating} stars` : recipe.difficulty}
          </span>
        </div>
        <p className="mt-4 max-w-xl text-sm leading-7 text-ink/72">{recipe.description ?? recipe.summary}</p>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {(recipe.tags ?? [recipe.time, recipe.servings]).map((tag) => (
            <span key={tag} className="rounded-full bg-cream px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-olive">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm font-semibold text-ink/65">
          <span className="inline-flex items-center gap-2">
            <Clock3 size={15} />
            {recipe.time}
          </span>
          <span className="inline-flex items-center gap-2">
            <Sparkles size={15} />
            {recipe.servings ?? "Editor pick"}
          </span>
        </div>
      </div>
    </article>
  );
}
