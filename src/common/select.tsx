type SelectOption = {
  label: string;
  value: string;
}

type SelectProps = {
  label: string;
  id: string;
  options: SelectOption[];
  placeholderText: string | null;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

export function Select({id, label, placeholderText, options, onChange, value}: SelectProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} onChange={onChange} value={value}>
        <option>{placeholderText}</option>
        { options.map((o) => {
          return <option key={o.value} value={o.value}>{o.label}</option>
        })}
      </select>
    </div>
  )
}