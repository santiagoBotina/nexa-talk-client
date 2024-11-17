export function H1({ title, className }: { title: string, className?: string }) {
  return <h1 className={`text-4xl ${className}`}>{title}</h1>;
}
