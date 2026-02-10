import { useState } from "react";
import { Link } from "react-router-dom";

import FormHeader from "../../components/ui/FormHeader";
import FormInput from "../../components/ui/FormInput";
import AuthLayout from "../../components/auth/AuthLayout";
import FormButton from "../../components/ui/FormButton";

function SignUp() {
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
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <AuthLayout>
      {/* Header */}
      <FormHeader
        title="Create an account"
        subtitle="Sign up to start chatting with your friends!"
      />
      {/* Form */}
      <form
        className="flex flex-col gap-4 text-[0.925rem]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 text-gray-600">
          {/* Username */}
          <FormInput
            label="Username"
            id="username"
            type="text"
            onChange={onInputChange}
            placeholder="Create a unique username"
          />

          {/* Email */}
          <FormInput
            label="Email"
            id="email"
            type="email"
            placeholder="you@example.com"
            onChange={onInputChange}
            required
          />

          {/* Password */}
          <FormInput
            label="Password"
            id="password"
            type="password"
            placeholder="Password must be at least 8 characters"
            onChange={onInputChange}
            required
          />
        </div>
        {/* Button */}
        <FormButton
          type="submit"
          text="Sign Up"
          disabled={
            formData.username.length === 0 ||
            formData.email.length === 0 ||
            formData.password.length < 8
          }
        />
      </form>
      <div className="flex items-center gap-1 mt-4 justify-center">
        <p>Already have an account?</p>
        <Link to="/auth/sign-in" className="text-[#615fff] hover:underline">
          Sign in
        </Link>
      </div>
    </AuthLayout>
  );
}

export default SignUp;
