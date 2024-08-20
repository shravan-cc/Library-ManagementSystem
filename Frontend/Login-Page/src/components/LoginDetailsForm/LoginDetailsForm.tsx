import { ChangeEvent, FormEvent } from "react";
import { InputElement } from "../InputElement/InputElement";
import { RegistrationActions } from "../RegistrationActions/RegistrationActions";

interface LoginDetailsForm {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function LoginDetailsForm({
  handleSubmit,
  handleChange,
}: LoginDetailsForm) {
  return (
    <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
      <InputElement
        inputType="text"
        label="Email"
        name="email"
        placeholder="Enter your Email"
        onChange={handleChange}
      />
      <InputElement
        inputType="password"
        label="Password"
        name="password"
        placeholder="Enter your password"
        onChange={handleChange}
      />
      <RegistrationActions
        registerButtonLabel="Login"
        accountPrompt="Don't have an account? "
        loginText="Signup"
      />
    </form>
  );
}
