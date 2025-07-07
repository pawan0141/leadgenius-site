export function Card({ children, className = "", ...props }) {
  return (
    <div className={`rounded-xl border p-4 shadow ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`text-gray-800 ${className}`} {...props}>
      {children}
    </div>
  );
}

