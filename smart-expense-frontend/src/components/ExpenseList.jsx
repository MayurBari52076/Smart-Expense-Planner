import { useState } from "react";
import api from "../services/api";
import Toast from "./Toast";
import Spinner from "./Spinner";

export default function ExpenseList({ expenses }) {

  const [search,setSearch] = useState("");
  const [sort,setSort] = useState("newest");
  const [page,setPage] = useState(1);
  const perPage = 5;

  const [editingId,setEditingId] = useState(null);
  const [title,setTitle] = useState("");
  const [amount,setAmount] = useState("");
  const [toast,setToast] = useState("");
  const [loading,setLoading] = useState(false);

  const showToast = msg => {
    setToast(msg);
    setTimeout(()=>setToast(""),2000);
  };

  let filtered = expenses.filter(e =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  if(sort==="amount-asc")
    filtered.sort((a,b)=>a.amount-b.amount);

  if(sort==="amount-desc")
    filtered.sort((a,b)=>b.amount-a.amount);

  if(sort==="newest")
    filtered.sort((a,b)=>new Date(b.date)-new Date(a.date));

  const totalPages = Math.ceil(filtered.length/perPage);

  const visible = filtered.slice(
    (page-1)*perPage,
    page*perPage
  );

  const startEdit = e => {
    setEditingId(e._id);
    setTitle(e.title);
    setAmount(e.amount);
  };

  const updateExpense = async id => {
    setLoading(true);
    await api.put(`/expenses/${id}`,{title,amount});
    setLoading(false);
    showToast("Updated");
    window.location.reload();
  };

  const deleteExpense = async id => {
    setLoading(true);
    await api.delete(`/expenses/${id}`);
    setLoading(false);
    showToast("Deleted");
    window.location.reload();
  };

  if(loading) return <Spinner/>;

  return (
    <div className="card">

      <h3>Expenses</h3>

      <input
        placeholder="Search..."
        value={search}
        onChange={e=>setSearch(e.target.value)}
      />

      <select onChange={e=>setSort(e.target.value)}>
        <option value="newest">Newest</option>
        <option value="amount-asc">Amount Low → High</option>
        <option value="amount-desc">Amount High → Low</option>
      </select>

      {visible.map(e=>(
        <div key={e._id} style={{marginTop:"10px"}}>

          {editingId===e._id ? (
            <>
              <input value={title} onChange={e=>setTitle(e.target.value)}/>
              <input type="number" value={amount} onChange={e=>setAmount(e.target.value)}/>
              <button onClick={()=>updateExpense(e._id)}>Save</button>
            </>
          ) : (
            <>
              <span>
                {e.title} - ₹{e.amount}
              </span>
              <button onClick={()=>startEdit(e)}>Edit</button>
              <button onClick={()=>deleteExpense(e._id)}>Delete</button>
            </>
          )}

        </div>
      ))}

      <div style={{marginTop:"10px"}}>
        <button disabled={page===1} onClick={()=>setPage(p=>p-1)}>Prev</button>
        <span>{page}/{totalPages}</span>
        <button disabled={page===totalPages} onClick={()=>setPage(p=>p+1)}>Next</button>
      </div>

      <Toast message={toast}/>
    </div>
  );
}
