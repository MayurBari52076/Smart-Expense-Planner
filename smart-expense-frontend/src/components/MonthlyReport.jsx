export default function MonthlyReport({ expenses }) {

  const total = expenses.reduce((sum,e)=>sum+e.amount,0);

  return (
    <div className="card">
      <h3>Monthly Report</h3>
      <h2>Total Spent: ₹{total}</h2>
      <p>Total Transactions: {expenses.length}</p>
    </div>
  );
}
