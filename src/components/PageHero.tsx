type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHero({ title, subtitle }: Props) {
  return (
    <section className="flex min-h-[220px] items-center bg-[#1C1C1E] px-5 py-16 text-white sm:min-h-[240px] sm:px-6 sm:py-20 lg:min-h-[260px] lg:px-16 lg:py-24">
      <div className="mx-auto w-full max-w-4xl text-center">
        <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-white/55 sm:text-xs">
          CREATE 308
        </p>

        <h1 className="mx-auto max-w-3xl text-4xl leading-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}