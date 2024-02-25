export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  let per =
    numItems === 0 && numPacked === 0
      ? 0
      : Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {numItems} Items in your bag and you already packed {numPacked} ({per}%)
      </em>
    </footer>
  );
}
