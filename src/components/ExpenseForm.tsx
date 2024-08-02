
export default function ExpenseForm() {
  return (
    <div>
      <form>
            <div className="mb-3" id="form">
                <label htmlFor="description" className="form-label">Description</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="name"
                    name="description"
                    />
                <label htmlFor="age" className="form-label">Amount</label>
                <input 
                       type="number"
                       className="form-control" 
                       id="amount"
                       name="amount"
                       />
                        <label htmlFor="age" className="form-label">Category</label>
                <select 
                       className="form-select" 
                       id="category"
                       >
                        <option selected></option>
                        <option>Glorosaries</option>
                       </select>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </div>
        </form>
    </div>
  )
}
