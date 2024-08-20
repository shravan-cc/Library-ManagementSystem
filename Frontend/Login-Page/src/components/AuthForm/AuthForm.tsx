/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserDetailsForm } from "../UserDetailsForm/UserDetailsForm";
import { GoogleAuthButton } from "../GoogleAuthButton/GoogleAuthButton";
import { useState } from "react";

interface AuthFormProps {
  onSubmit: (formData: FormData) => Promise<void>;
}

export function AuthForm({ onSubmit }: AuthFormProps) {
  const [formData, setFormData] = useState(new FormData());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFormData = new FormData();
    formData.forEach((value, key) => newFormData.append(key, value));
    newFormData.set(event.target.name, event.target.value);
    setFormData(newFormData);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="flex flex-col gap-5 max-h-screen w-full">
      <h1 className="font-semibold text-[#043133] text-5xl">Welcome</h1>
      <UserDetailsForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <GoogleAuthButton
        buttonLabel="Sign up with Google"
        inputUrl="src/assets/Google.png"
      />
    </div>
  );
}
