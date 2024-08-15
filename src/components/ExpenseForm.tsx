import categories from '../categories';
import { z } from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

interface Props{
  onSubmit: (data: ExpenseFormData) => void
}

const schema = z.object({
  description: z.string().min(3,{message:'Description should be more than 3 characters'}).max(50),
  amount: z.number({invalid_type_error: 'Amount is Required'}).min(3).max(100_000),
  category: z.enum(categories,{
    errorMap: ()=>({message: 'Category is required'})
  })
});

type ExpenseFormData = z.infer< typeof schema>
export default function ExpenseForm({onSubmit}: Props) {

    const {register, handleSubmit,reset, formState:{errors}}= useForm<ExpenseFormData>({resolver: zodResolver(schema)})
  return (
    <div>
      <form onSubmit={handleSubmit(data =>{
        onSubmit(data)
        reset()
      })}>
            <div className="mb-3" id="form">
                <label htmlFor="description" className="form-label" >Description</label>
                <input
                    {...register('description')} 
                    type="text" 
                    className="form-control" 
                    id="name"
                    name="description"
                    />
                    {errors.description && <p className="text-danger">{errors.description.message}</p>}
                <label htmlFor="age" className="form-label">Amount</label>
                <input 
                      {...register('amount',{valueAsNumber: true})}
                       type="number"
                       className="form-control" 
                       id="amount"
                       name="amount"
                       />
                       {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
                        <label htmlFor="age" className="form-label">Category</label>
                <select 
                       {...register('category')}
                       className="form-select" 
                       id="category"
                       >
                        <option selected></option>
                        {
                          categories.map((category,index)=> <option key={index} value={category}>{category}</option>)
                        }
                       </select>
                       {errors.category && <p className="text-danger">{errors.category.message}</p>}
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </div>
        </form>
    </div>
  )
}
