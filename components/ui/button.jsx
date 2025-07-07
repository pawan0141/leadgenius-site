export function Button({ children, ...props }) {
  return (
    <button
      className="py-2 px-4 bg-sky-700 text-white rounded hover:bg-sky-800 transition"
      {...props}
    >
      {children}
    </button>
  );
}
