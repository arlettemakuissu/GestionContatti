export default function When({ condition, children }) {
  if (!condition) return null;

  return <>{children}</>;
}
