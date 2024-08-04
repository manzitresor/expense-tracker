
interface Props {
  onSelect: (category: string) => void
}

export default function ExpenseFilter({onSelect}: Props) {
  return (
    <>
        <select className="form-select" onChange={(event)=> onSelect(event.target.value)}>
          <option value="">All categories</option>
          <option value="Gloceries">Gloceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
    </>
  )
}
