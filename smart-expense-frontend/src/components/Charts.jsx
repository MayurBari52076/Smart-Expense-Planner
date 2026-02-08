import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function Charts({ expenses }) {

  const categories = {};

  expenses.forEach(e=>{
    categories[e.category] =
      (categories[e.category] || 0) + e.amount;
  });

  const data = Object.keys(categories).map(key=>({
    name:key,
    value:categories[key]
  }));

  return (
    <div className="card">
      <h3>Category Breakdown</h3>

      <PieChart width={250} height={250}>
        <Pie data={data} dataKey="value" outerRadius={90}>
          {data.map((_,i)=>(
            <Cell key={i} fill="#6366f1"/>
          ))}
        </Pie>
        <Tooltip/>
      </PieChart>
    </div>
  );
}
