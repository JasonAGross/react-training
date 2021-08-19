type InputProps = {
  label: string;
  id: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: "text" | "number" | "email" | "phone" | "date";
}

export function Input({label, id, value, type = 'text', onChange}: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input onChange={onChange} type={type} id={id} value={value}></input>
    </div>
  )
}