import type { ReactNode } from "react";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg flex flex-col gap-2.5 p-8 text-gray-600 text-[0.925rem]">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
