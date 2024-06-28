import { useState } from "react";

export default function Form({ onAddItems }) {
  const quntityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [quantity, setQuantiy] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItms = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    onAddItems(newItms);
    setDescription("");
    setQuantiy(1);
  }

  return (
    <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
      <h3>what do you need for your trip🤩</h3>
      <select value={quantity} onChange={(e) => setQuantiy(+e.target.value)}>
        {quntityOptions.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter your item.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>add</button>
    </form>
  );
}
