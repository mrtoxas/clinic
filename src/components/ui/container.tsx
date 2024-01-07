import classNames from 'classnames';

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

const defaultClassName = "max-w-6xl mx-auto px-4";

export const Container = ({ children, className }: ContainerProps) => {
  const combinedClassName = classNames(defaultClassName, className);

  return <div className={combinedClassName}>{children}</div>;
};