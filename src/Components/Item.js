export default function Item({
  uid,
  description,
  quantity,
  packedBool,
  onDeleteItem,
  onToggleItem,
}) {
  return (
    <li>
      <input
        type="checkbox"
        value={packedBool}
        onChange={() => {
          onToggleItem(uid);
        }}
      />
      <span style={packedBool ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(uid)}>❌</button>
    </li>
  );
}
