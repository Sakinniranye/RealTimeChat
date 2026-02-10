import type { ReactNode } from "react";

interface FormButtonProps {
  children: ReactNode;
}

function FormButton({ children }: FormButtonProps) {
  return (
    <button
      type="submit"
      className="w-full border border-gray-200 text-white bg-[#615fff] rounded-sm py-2 transition hover:bg-[#504de0]"
    >
      {children}
    </button>
  );
}

export default FormButton;
