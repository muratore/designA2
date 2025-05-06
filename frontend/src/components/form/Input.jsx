function Input({
  name,
  texto,
  type,
  placeholder,
  value,
  multiple,
  onHandleChange,
  autoComplete

}) {
  return (
    <div className="flex flex-col gap-2 mb-4 text-zinc-500">
      <label htmlFor={name}>{texto}: </label>
      <input
        className="border border-zinc-300 px-4 py-2 text-zinc-500 rounded-md outline-0"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onHandleChange}
        {...(multiple ? { multiple } : "")}
        autoComplete={autoComplete}
      />
    </div>
  );
}

export default Input;
