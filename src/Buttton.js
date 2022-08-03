export function Button({ children }) {
  return (
    <button className="p-4 mx-16 my-12 rounded bg-blue-500 hover:bg-blue-600 transition">
      {children}
    </button>
  );
}