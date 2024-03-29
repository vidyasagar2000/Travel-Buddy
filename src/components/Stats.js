export default function Stats({ items }) {
    if (!items.length) {
      return (
        <footer className="stats">
          <em>Start Adding Some Items for Your Trip 🚀.</em>
        </footer>
      );
    }
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const Percentage = Math.round((numPacked * 100) / numItems);
    return (
      <footer className="stats">
        {numPacked < numItems ? (
          <em>
            💼 You have {numItems} items in your list, and you already packed{" "}
            {numPacked} ({Percentage} %)
          </em>
        ) : (
          <em>Yay! All items packed. You are ready to Go ✈️.</em>
        )}
      </footer>
    );
  }