import { useEffect,useState } from "react";
import api from "../services/api";

import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ForecastCard from "../components/ForecastCard";
import Charts from "../components/Charts";
import MonthlyReport from "../components/MonthlyReport";
import ExportCSV from "../components/ExportCSV";

export default function Dashboard() {

  const [expenses,setExpenses] = useState([]);
  const [forecast,setForecast] = useState(0);

  useEffect(()=>{
    api.get("/expenses").then(r=>setExpenses(r.data));
    api.get("/expenses/forecast").then(r=>setForecast(r.data.forecast));
  },[]);

  return (
    <div className="container">

      <div className="grid">
        <ExpenseForm/>
        <ForecastCard value={forecast}/>
        <MonthlyReport expenses={expenses}/>
        <Charts expenses={expenses}/>
      </div>

      <ExportCSV expenses={expenses}/>
      <ExpenseList expenses={expenses}/>

    </div>
  );
}
