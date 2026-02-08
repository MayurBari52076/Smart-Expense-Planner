import { useState } from "react";
import api from "../services/api";

export default function ExpenseForm() {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("General");
  const [date, setDate] = useState("");

  const submitExpense = async () => {
    if (!title || !amount || !date) {
      alert("Please fill all fields");
      return;
    }

    await api.post("/expenses", {
      title,
      amount,
      category,
      date
    });

    setTitle("");
    setAmount("");
    setCategory("General");
    setDate("");
    window.location.reload();
  };

  return (
    <div className="card">
      <h3>Add Expense</h3>

      <input
        placeholder="Title"
        value={title}
        onChange={e=>setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e=>setAmount(e.target.value)}
      />

      <select value={category} onChange={e=>setCategory(e.target.value)}>
        <option>General</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Bills</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={e=>setDate(e.target.value)}
      />

      <button onClick={submitExpense}>Add Expense</button>
    </div>
  );
}
