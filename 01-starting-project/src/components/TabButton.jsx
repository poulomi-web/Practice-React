export default function TabButton({ children }) {
  return (
    <li>
      <button
        className="tab-button"
        type="button"
        onClick={() => {
          console.log(`Clicked ${children}`);
        }}
      >
        {children}
      </button>
    </li>
  );
}
