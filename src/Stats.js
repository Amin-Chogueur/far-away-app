export default function Stats({ items }) {
  const itemsQuantity = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  if (!itemsQuantity)
    return (
      <footer className="stats">
        <em>"start add your items for the trip 😃"</em>
      </footer>
    );
  return (
    <footer className="stats">
      <em>
        {itemsQuantity !== packedItems
          ? `👜 you have ${itemsQuantity} items on your list and you alredeay packed ${packedItems}`
          : "you packed all your items and now you areready for the trip😍"}
      </em>
    </footer>
  );
}
