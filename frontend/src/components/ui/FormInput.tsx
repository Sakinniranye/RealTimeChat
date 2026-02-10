type FormInputProps = {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function FormInput({
  label,
  id,
  type = "text",
  placeholder = "",
  onChange,
  required = true,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <input
        className="border border-gray-300 rounded-sm py-1.5 px-2 focus:outline-none"
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export default FormInput;
