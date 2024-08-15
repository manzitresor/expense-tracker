import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [selectedExpense,setSelectedExpense] = useState('')
  const [expenses,setExpenses] = useState(
    [
      {id:1, description: "aaa", amount: 12, category:"Gloceries"},
      {id:2, description: "ccc", amount: 14, category:"Gloceries"},
      {id:3, description: "ddd", amount: 15, category:"Utilities"},
    ]
  )
  const visibility = selectedExpense ? expenses.filter((expense => expense.category === selectedExpense)): expenses

  return (
    <>
    <div className="mb-5">
      <ExpenseForm onSubmit={expense => setExpenses([...expenses,{...expense,id: expenses.length + 1}])}/>
    </div>
      <div className="mb-3">
        <ExpenseFilter onSelect={(category)=> setSelectedExpense(category)}/>
      </div>
      <ExpenseList expenses={visibility} onDelete={(id)=> setExpenses(expenses.filter((el)=> el.id !== id))}/>
    </>
  )
}

export default App
