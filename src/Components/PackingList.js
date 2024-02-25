import { useState } from "react";
import Item from "./Item";

function renderPackingList(items, onDeleteItem, onToggleItem, onClearList) {
  const listItems = [];
  for (let i = 0; i < items.length; i++) {
    listItems.push(
      <Item
        key={items[i].id}
        uid={items[i].id}
        description={items[i].description}
        quantity={items[i].quantity}
        packedBool={items[i].packed}
        onDeleteItem={onDeleteItem}
        onToggleItem={onToggleItem}
      />
    );
  }
  return listItems;
}

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {renderPackingList(
          sortedItems,
          onDeleteItem,
          onToggleItem,
          onClearList
        )}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input"> Sort by input order</option>
          <option value="description"> Sort by description</option>
          <option value="packed"> Sort by packed status</option>
        </select>
        <button onClick={onClearList}> Clear List </button>
      </div>
    </div>
  );
}
