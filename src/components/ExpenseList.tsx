interface Expense {
  id: number,
  description: string,
  amount: number,
  category: string,
}

interface Props {
  expenses: Expense[];
  onDelete: (id:number)=> void;
}

export default function ExpenseList({expenses,onDelete}: Props) {
  return (
    <>
        <table className="table table-bordered border-primary">
          <thead className="table-dark">
            <tr>
              <td>Description</td>
              <td>Amount</td>
              <td>Category</td>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => 
                  <tr key={expense.id}>
                      <td>{expense.description}</td>
                      <td>{expense.amount}</td>
                      <td>
                        <span  className="category">{expense.category}</span>
                      <button className="btn btn-outline-danger" id="delete-btn" onClick={()=> onDelete(expense.id)}>Delete</button>
                      </td>
                  </tr>
            )}
         
        
          </tbody>
          <tfoot>
            <tr>
              <td className="total">Total</td>
              <td className="amount">${expenses.reduce((acc,expense) => expense.amount + acc,0).toFixed(2)}</td>
            </tr>
          </tfoot>
        </table> 
    </>
  )
}
