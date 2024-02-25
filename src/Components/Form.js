import { useState } from "react";

function renderOptions(end) {
  const optionList = [];
  for (let i = 1; i <= end; i++) {
    optionList.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return optionList;
}

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    setQuantity((q) => (q = 1));
    setDescription((d) => (d = ""));
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> Add your items for the trip </h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity((q) => (q = Number(e.target.value)))}
      >
        {renderOptions(20)}
      </select>
      <input
        type="text"
        placeholder="Item name..."
        value={description}
        onChange={(e) => setDescription((d) => (d = e.target.value))}
      />
      <button>ADD</button>
    </form>
  );
}
