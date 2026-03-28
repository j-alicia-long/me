interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className = '' }: SectionProps) => (
  <section className="py-16 sm:py-20">
    <div className={className}>
      {children}
    </div>
  </section>
);

export default Section;
