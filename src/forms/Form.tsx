import { FieldValues, useForm } from 'react-hook-form'

interface formData {
    name: string,
    age: number
}

export default function Form() {
    const {register,handleSubmit,formState: {errors}} = useForm<formData>();
    console.log(errors)

    function onSubmit(data: FieldValues) {
        console.log(data)
    }

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3" id="form">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                    {...register('name',{required: true,minLength: 3})}
                    type="text" 
                    className="form-control" 
                    id="name"
                    name="name"
                    />
                    {errors.name?.type ==='required' &&<p className='text-danger'>Name is required</p>}
                    {errors.name?.type ==='minLength' &&<p className='text-danger'>Name has to be more than 3 character</p>}
                <label htmlFor="age" className="form-label">Age</label>
                <input 
                       {...register('age')}
                       type="number"
                       className="form-control" 
                       id="age"
                       name="age"
                       />
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </div>
        </form>
    </>
  )
}
