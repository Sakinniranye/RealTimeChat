import { useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import FormHeader from "../../components/ui/FormHeader";
import FormInput from "../../components/ui/FormInput";

function ResetPassword() {
  const [email, setEmail] = useState<string>("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Reset instructions sent to ${email}`);
  };

  return (
    <AuthLayout>
      {/* Header */}
      <FormHeader
        title="Forgot your password?"
        subtitle="Enter your email to receive reset instructions."
      />

      {/* Form */}
      <form
        className="flex flex-col gap-4 text-[0.925rem]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 text-gray-600">
          <FormInput
            label="Email"
            id="email"
            type="email"
            onChange={onInputChange}
          />
        </div>
        <button
          type="submit"
          className="w-full border border-gray-200 text-white bg-[#615fff] rounded-sm py-2 transition hover:bg-[#504de0]"
        >
          Send Reset Instructions
        </button>
      </form>
      <Link
        to="/auth/sign-in"
        className="text-[#615fff] hover:underline text-center"
      >
        Back to Sign in
      </Link>
    </AuthLayout>
  );
}

export default ResetPassword;
