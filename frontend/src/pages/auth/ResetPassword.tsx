import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import FormHeader from "../../components/ui/FormHeader";
import FormInput from "../../components/ui/FormInput";
import FormButton from "../../components/ui/FormButton";

function ResetPassword() {
  useEffect(() => {
    document.title = "Reset Password | RealTimeChat";
  }, []);

  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>(""); // For user feedback

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    setMessage(`Reset instructions sent to ${email}!`);
    setEmail("");
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
        className="flex flex-col gap-2 text-[0.925rem]"
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
        <FormButton
          type="submit"
          text="Send Reset Instructions"
          disabled={email.length === 0}
        />
        {message && <p className="text-green-600 mt-4">{message}</p>}
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
