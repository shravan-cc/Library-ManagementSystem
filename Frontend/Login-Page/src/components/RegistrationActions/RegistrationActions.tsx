import { Link } from "react-router-dom";

interface RegisterProps {
  registerButtonLabel: string;
  accountPrompt: string;
  loginText: string;
}

export function RegistrationActions({
  registerButtonLabel,
  accountPrompt,
  loginText,
}: RegisterProps) {
  return (
    <div className="flex flex-col gap-5 items-center">
      <button
        type="submit"
        className="bg-custom-dark-green text-white text-lg px-12 py-2.5 text-center font-poppins w-3/10"
      >
        {registerButtonLabel}
      </button>
      <p className="text-lg text-black">
        {accountPrompt}
        {registerButtonLabel === "Signup" ? (
          <Link to="/login" className="text-custom-dark-green">
            {loginText}
          </Link>
        ) : (
          <Link to="/signup" className="text-custom-dark-green">
            {loginText}
          </Link>
        )}
      </p>
    </div>
  );
}
