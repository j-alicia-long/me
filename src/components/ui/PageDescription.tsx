interface PageDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const PageDescription = ({ children, className = 'text-base text-primary-950/70 dark:text-primary-100/70 sm:text-lg' }: PageDescriptionProps) => (
  <p className={className}>
    {children}
  </p>
);

export default PageDescription;
