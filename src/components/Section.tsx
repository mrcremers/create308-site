type SectionProps = {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
};

export default function Section({
  children,
  className = "",
  dark = false,
}: SectionProps) {
  return (
    <section
      className={`
        px-5 py-14
        sm:px-6 sm:py-16
        lg:px-16 lg:py-24
        ${dark ? "bg-[#1C1C1E] text-white" : "bg-[#F7F6F4] text-[#1C1C1E]"}
        ${className}
      `}
    >
      <div className="mx-auto w-full max-w-6xl">
        {children}
      </div>
    </section>
  );
}