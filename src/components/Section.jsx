export default function Section({ title, children }) {
  return (
    <section className="py-12 md:py-16">
      <div className="fade-up">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        <span className="mt-3 block h-1 w-10 rounded-full bg-accent" />
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}
