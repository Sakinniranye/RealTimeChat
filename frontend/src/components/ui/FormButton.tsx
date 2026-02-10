type FormButtonProps = {
  type: "button" | "submit" | "reset";
  text: string;
  disabled?: boolean;
};

function FormButton({ type, text, disabled = false }: FormButtonProps) {
  return (
    <button
      className={`w-full border border-gray-200 text-white rounded-sm py-2 transition bg-[#615fff] ${disabled ? "opacity-50 cursor-not-allowed" : " hover:bg-[#504de0]"}`}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default FormButton;
