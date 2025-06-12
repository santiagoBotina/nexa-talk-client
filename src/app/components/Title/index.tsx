interface Props {
  title: string;
  className?: string;
}

export function H1({ title, className }: Props) {
  return (
    <h1 className={`text-2xl font-bold text-gray-900 ${className}`}>{title}</h1>
  );
}
