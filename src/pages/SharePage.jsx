import { Camera, CheckCircle2, Notebook, Sparkles } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { sharePrompts } from "../data/siteData";

export default function SharePage() {
  return (
    <div className="pb-6">
      <section className="section-wrap pt-10 lg:pt-16">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="surface rounded-[36px] p-7 sm:p-8">
            <p className="eyebrow">Share a recipe</p>
            <h1 className="headline mt-4 text-5xl leading-tight text-ink sm:text-6xl">
              Help someone cook it well the first time.
            </h1>
            <p className="mt-5 text-lg leading-8 text-ink/72">
              The best recipe pages are generous. This page encourages stories, realistic substitutions, and
              clear steps without making contributors wrestle with a clunky form.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                "Add prep, cook, and rest time separately so pacing feels honest.",
                "Include one photo cue or texture cue for each critical step.",
                "Leave space for your version notes, swaps, and serving rituals.",
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-3 rounded-[24px] bg-cream px-4 py-4">
                  <CheckCircle2 size={18} className="mt-1 text-olive" />
                  <p className="text-sm leading-7 text-ink/72">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          <form className="surface rounded-[36px] p-5 sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-olive/70">
                  Recipe title
                </span>
                <input
                  className="w-full rounded-[22px] border border-olive/10 bg-[#fffaf4] px-4 py-4 outline-none transition focus:border-rust/35"
                  placeholder="Ex: Burnt Butter Gnocchi with Sage"
                />
              </label>
              <label>
                <span className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-olive/70">
                  Prep time
                </span>
                <input
                  className="w-full rounded-[22px] border border-olive/10 bg-[#fffaf4] px-4 py-4 outline-none transition focus:border-rust/35"
                  placeholder="20 min"
                />
              </label>
              <label>
                <span className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-olive/70">
                  Servings
                </span>
                <input
                  className="w-full rounded-[22px] border border-olive/10 bg-[#fffaf4] px-4 py-4 outline-none transition focus:border-rust/35"
                  placeholder="4 servings"
                />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-olive/70">
                  Why it matters
                </span>
                <textarea
                  rows="4"
                  className="w-full rounded-[22px] border border-olive/10 bg-[#fffaf4] px-4 py-4 outline-none transition focus:border-rust/35"
                  placeholder="Share the memory, the origin, or the reason this one stays in your rotation."
                />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-olive/70">
                  Ingredient highlights
                </span>
                <textarea
                  rows="4"
                  className="w-full rounded-[22px] border border-olive/10 bg-[#fffaf4] px-4 py-4 outline-none transition focus:border-rust/35"
                  placeholder="List the ingredients people should notice first."
                />
              </label>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Camera, label: "Add hero image" },
                { icon: Notebook, label: "Write step notes" },
                { icon: Sparkles, label: "Publish preview" },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="inline-flex h-28 flex-col items-center justify-center gap-3 rounded-[24px] border border-dashed border-olive/18 bg-cream text-sm font-semibold text-ink/72"
                >
                  <item.icon size={20} className="text-rust" />
                  {item.label}
                </button>
              ))}
            </div>

            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-rust px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(184,80,46,0.28)]"
            >
              Save draft recipe
            </button>
          </form>
        </div>
      </section>

      <section className="section-wrap mt-20 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="surface rounded-[34px] p-7 sm:p-8">
          <SectionHeading
            eyebrow="Helpful prompts"
            title="A softer publishing flow for real cooks."
            description="These prompts nudge contributors toward the kind of details readers actually need once the pan is hot."
          />

          <div className="mt-8 grid gap-4">
            {sharePrompts.map((prompt, index) => (
              <div key={prompt} className="rounded-[26px] bg-cream px-5 py-5">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-rust">Prompt {index + 1}</p>
                <p className="mt-2 text-base leading-7 text-ink/74">{prompt}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="surface rounded-[34px] p-7 sm:p-8">
          <p className="eyebrow">Community standard</p>
          <h2 className="headline mt-4 text-4xl leading-tight text-ink">Recipe sharing works best when it is specific and kind.</h2>
          <div className="mt-8 space-y-4">
            {[
              "Name the texture cues: glossy, loose, thick, deeply golden, spoonable.",
              "Offer substitutions that you have actually tested or would trust at your own table.",
              "Describe how leftovers behave, because that changes whether people make the dish.",
              "Keep the page warm and practical. Readers should feel invited, not lectured.",
            ].map((line) => (
              <div key={line} className="rounded-[24px] border border-olive/10 bg-white/75 px-5 py-4 text-sm leading-7 text-ink/72">
                {line}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
