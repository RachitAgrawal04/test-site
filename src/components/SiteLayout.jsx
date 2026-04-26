import { Link, NavLink } from "react-router-dom";
import { ChefHat, Menu, NotebookPen } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Recipes", to: "/recipes" },
  { label: "Share", to: "/share" },
];

function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "rounded-full px-4 py-2 text-sm font-semibold transition",
          isActive
            ? "bg-olive text-cream shadow-[0_12px_24px_rgba(51,92,77,0.2)]"
            : "text-ink/72 hover:bg-white/70 hover:text-ink",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}

export default function SiteLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="page-shell grain-overlay min-h-screen">
      <header className="sticky top-0 z-40 border-b border-white/50 bg-cream/75 backdrop-blur-md">
        <div className="section-wrap flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rust text-cream shadow-[0_18px_28px_rgba(184,80,46,0.28)]">
              <ChefHat size={22} />
            </div>
            <div>
              <p className="headline text-xl leading-none text-ink">Saffron Table</p>
              <p className="text-sm text-ink/60">Cook, collect, and pass it on.</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavItem key={item.to} {...item} />
            ))}
            <Link
              to="/share"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-rust px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(184,80,46,0.28)] transition hover:-translate-y-0.5"
            >
              <NotebookPen size={16} />
              Share a dish
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/60 bg-white/70 text-ink md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            <Menu size={20} />
          </button>
        </div>

        {open && (
          <div className="section-wrap pb-4 md:hidden">
            <div className="surface rounded-3xl p-3">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavItem key={item.to} {...item} onClick={() => setOpen(false)} />
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="mt-24 border-t border-olive/10 bg-[#f3e4d2]/70 py-10">
        <div className="section-wrap flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="headline text-3xl text-ink">For recipes that deserve a little ceremony.</p>
            <p className="mt-3 text-sm leading-7 text-ink/68">
              Saffron Table is designed for cooks who save notes in the margins, swap ingredient stories,
              and like a site that feels as generous as the meal.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-semibold text-ink/62">
            <Link className="link-underline" to="/">
              Home
            </Link>
            <Link className="link-underline" to="/recipes">
              Recipe library
            </Link>
            <Link className="link-underline" to="/share">
              Share your dish
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
