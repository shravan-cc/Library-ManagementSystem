import { ChangeEvent, FormEvent } from "react";
import { InputElement } from "../InputElement/InputElement";
import { RegistrationActions } from "../RegistrationActions/RegistrationActions";

interface UserDetailsFormProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function UserDetailsForm({
  handleSubmit,
  handleChange,
}: UserDetailsFormProps) {
  return (
    <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-5 w-full">
        <InputElement
          inputType="text"
          label="First Name"
          name="firstName"
          placeholder="Enter your First Name"
          onChange={handleChange}
        />
        <InputElement
          inputType="text"
          label="Last Name"
          name="lastName"
          placeholder="Enter your Last Name"
          onChange={handleChange}
        />
        <InputElement
          inputType="text"
          label="Phone Number"
          name="phone"
          placeholder="Enter your Phone number"
          onChange={handleChange}
        />
        <InputElement
          inputType="text"
          label="Address"
          name="address"
          placeholder="Enter your Address"
          onChange={handleChange}
        />
        <InputElement
          inputType="text"
          label="Email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <InputElement
          inputType="text"
          label="Role"
          name="role"
          placeholder="Enter your role"
          onChange={handleChange}
        />
        <InputElement
          inputType="password"
          label="Password"
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
        />
        <InputElement
          inputType="password"
          label="Confirm Password"
          name="confirm"
          placeholder="Confirm Password"
        />
      </div>
      <RegistrationActions
        registerButtonLabel="Signup"
        accountPrompt="Already have an Account?"
        loginText="Log In"
      />
    </form>
  );
}
