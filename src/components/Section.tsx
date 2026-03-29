type SectionProps = {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
};

export default function Section({ children, className = "", dark = false }: SectionProps) {
  return (
    <section
      className={`
        px-8 py-20 lg:px-16
        ${dark ? "bg-[#1C1C1E] text-white" : "bg-[#F7F6F4] text-[#1C1C1E]"}
        ${className}
      `}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}