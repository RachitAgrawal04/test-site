export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const aligned = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${aligned}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="headline mt-3 text-4xl leading-tight text-ink sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-ink/70 sm:text-lg">{description}</p>
    </div>
  );
}
