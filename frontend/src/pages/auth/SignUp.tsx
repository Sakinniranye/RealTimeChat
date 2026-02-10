import FormHeader from "../../components/ui/FormHeader";
import FormInput from "../../components/ui/FormInput";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";

function SignUp() {
  return (
    <AuthLayout>
      {/* Header */}
      <FormHeader
        title="Create an account"
        subtitle="Sign up to start chatting with your friends!"
      />
      {/* Form */}
      <form className="flex flex-col gap-4 text-[0.925rem]">
        <div className="flex flex-col gap-2 text-gray-600">
          {/* Username */}
          <FormInput
            label="Username"
            id="username"
            placeholder="Create a unique username"
          />

          {/* Email */}
          <FormInput
            label="Email"
            id="email"
            type="email"
            placeholder="you@example.com"
            required
          />

          {/* Password */}
          <FormInput
            label="Password"
            id="password"
            type="password"
            placeholder="Password must be at least 8 characters"
            required
          />
        </div>
        {/* Button */}
        <button
          type="submit"
          className="w-full border border-gray-200 text-white bg-[#615fff] rounded-sm py-2 transition hover:bg-[#504de0]"
        >
          Sign Up
        </button>
      </form>
      <div className="flex items-center gap-1 mt-4 justify-center">
        <p>Already have an Account?</p>
        <Link to="/auth/sign-in" className="text-[#615fff] hover:underline">
          Sign in
        </Link>
      </div>
    </AuthLayout>
  );
}

export default SignUp;
