export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-xl bg-white border p-4 shadow ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}


