import { useState } from "react";
import { Link } from "react-router-dom";

import FormHeader from "../../components/ui/FormHeader";
import FormInput from "../../components/ui/FormInput";
import AuthLayout from "../../components/auth/AuthLayout";

function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    alert(`Email: ${formData.email}, Password: ${formData.password}`);
  };

  return (
    <AuthLayout>
      {/* Header */}
      <FormHeader
        title="Welcome back!"
        subtitle="Sign in to access your conversations."
      />

      {/* Form */}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <FormInput
            label="Email"
            id="email"
            type="email"
            onChange={onInputChange}
          />
          <FormInput
            label="Password"
            id="password"
            type="password"
            onChange={onInputChange}
          />
          <div className="flex items-center gap-1">
            <p>Forgot your password?</p>
            <Link
              to="/auth/reset-password"
              className="text-[#615fff] hover:underline"
            >
              Reset password
            </Link>
          </div>
        </div>

        <button
          type="submit"
          className="w-full border border-gray-200 text-white bg-[#615fff] rounded-sm py-2 transition hover:bg-[#504de0]"
        >
          Sign In
        </button>
      </form>
      <div className="flex items-center gap-1 mt-4 justify-center">
        <p>Don't have an Account?</p>
        <Link to="/auth/sign-up" className="text-[#615fff] hover:underline">
          Sign up
        </Link>
      </div>
    </AuthLayout>
  );
}

export default SignIn;
