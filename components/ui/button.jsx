export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-sky-700 hover:bg-sky-800 text-white font-semibold py-2 px-4 rounded-xl transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
