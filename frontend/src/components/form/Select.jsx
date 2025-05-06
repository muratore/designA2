function Select({ options, name, texto, onHandleChange }) {
  return (
    <div className="flex flex-col gap-2 mb-4 text-zinc-500">
      <label htmlFor={name}>{texto}:</label>
      <select
        className="px-4 py-2 border outline-0"
        id={name}
        name={name}
        onChange={onHandleChange}
      >
        <option value={""}>Selecione o tipo de trabalho </option>
        {options.map((opt) => (
        
         
            <option key={opt} value={opt} >

            {opt}
          </option>
          
        ))}
      </select>
    </div>
  );
}

export default Select;
