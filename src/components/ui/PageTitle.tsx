interface PageTitleProps {
  children: React.ReactNode;
  className?: string;
}

const PageTitle = ({ children, className = 'text-2xl font-medium tracking-tight sm:text-2xl lg:text-4xl' }: PageTitleProps) => (
  <h1 className={className}>
    {children}
  </h1>
);

export default PageTitle;
