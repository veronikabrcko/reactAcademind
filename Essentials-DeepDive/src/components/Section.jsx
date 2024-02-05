export default function Section({ title, children, ...props }) {
  // all extra props will be forwarded to section component
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
