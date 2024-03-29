import { useState } from "react";

export default function Form({ setItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
  
    function handleAddItems(item) {
      setItems((items) => [...items, item]);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      if (!description) return;
      const newItem = {
        id: Date.now(),
        description: description,
        quantity: quantity,
        packed: false,
      };
  
      handleAddItems(newItem);
  
      setDescription("");
      setQuantity(1);
    }
    return (
      <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
        <h3>What do you need for your 😍 trip?</h3>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((value) => {
            return (
              <option value={value} key={value}>
                {value}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button>Add</button>
      </form>
    );
  }