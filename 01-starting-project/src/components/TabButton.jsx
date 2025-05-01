export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button
        className={isSelected ? "active" : "tab-button"}
        type="button"
        onClick={onSelect}
      >
        {children}
      </button>
    </li>
  );
}
