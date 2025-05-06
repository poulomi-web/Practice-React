export default function section({ children, id, ...props }) {
  return (
    <section {...props}>
      <h2>{children}</h2>
    </section>
  );
}
