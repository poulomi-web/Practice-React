export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button
        className={isSelected ? "active" : "tab-button"}
        type="button"
        {...props}
      >
        {children}
      </button>
    </li>
  );
}
