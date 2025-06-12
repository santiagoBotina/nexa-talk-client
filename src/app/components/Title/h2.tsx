interface Props {
  title: string;
  className?: string;
}

export function H2({ title, className }: Props) {
  return (
    <h2 className={`text-xl font-semibold text-gray-900 ${className}`}>
      {title}
    </h2>
  );
}
