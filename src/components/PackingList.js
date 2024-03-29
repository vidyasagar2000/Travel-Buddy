import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItems, handleToggleItem, setItems }) {
    const [sortBy, setSortBy] = useState("input");
    let sortedItems;
    if (sortBy === "input") sortedItems = items;
    if (sortBy === "description") {
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
    }
    if (sortBy === "packed")
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
  
    function handleClearList() {
      const confirmed = window.confirm(
        "Are you sure to delete all items from your list ?"
      );
      if (confirmed) setItems([]);
    }
    return (
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItems={onDeleteItems}
              handleToggleItem={handleToggleItem}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description </option>
            <option value="packed">Sort by packed status</option>
          </select>
          {items.length > 0 && (
            <button onClick={handleClearList}>Clear List</button>
          )}
        </div>
      </div>
    );
  }