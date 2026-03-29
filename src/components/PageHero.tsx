type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHero({ title, subtitle }: Props) {
  return (
    <section className="bg-[#1C1C1E] text-white px-8 lg:px-16 text-center min-h-[260px] flex items-center">
      <div className="max-w-3xl mx-auto w-full">
        <h1 className="text-5xl md:text-6xl font-serif mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/80 text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}