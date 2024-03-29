
export default function Item({ item, onDeleteItems, handleToggleItem }) {
    return (
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onClick={() => {
            handleToggleItem(item.id);
          }}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItems(item.id)}>❌</button>
      </li>
    );
  }