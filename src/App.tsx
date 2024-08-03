import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
function App() {
  const [exprenses,setExpenses] = useState(
    [
      {id:1, description: "aaa", amount: 12, category:"Glocaries"},
      {id:2, description: "ccc", amount: 14, category:"Glocaries"},
      {id:3, description: "ddd", amount: 15, category:"Glocaries"},
    ]
  )
  return (
    <>
    <ExpenseForm/>
    <ExpenseList expenses={exprenses} onDelete={(id)=> setExpenses(exprenses.filter((el)=> el.id !== id))}/>
    <ExpenseFilter/>
    </>
  )
}

export default App
