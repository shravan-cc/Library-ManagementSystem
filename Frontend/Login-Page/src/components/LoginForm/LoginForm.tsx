import { useState } from "react";
import { GoogleAuthButton } from "../GoogleAuthButton/GoogleAuthButton";
import { LoginDetailsForm } from "../LoginDetailsForm/LoginDetailsForm";

interface LoginFormProps {
  handleLogin: (formData: FormData) => Promise<void>;
}

export function LoginForm({ handleLogin }: LoginFormProps) {
  const [formData, setFormData] = useState(new FormData());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Ensure that the name attribute is properly set for each input field
    if (!name) {
      console.error("Input field is missing a 'name' attribute");
      return;
    }

    // Create a new FormData object
    const newFormData = new FormData();

    // Append existing form data to the new FormData object
    formData.forEach((existingValue, key) => {
      newFormData.append(key, existingValue);
    });

    // Set the new value for the input that triggered the change
    newFormData.set(name, value);

    // Update the state with the new FormData object
    setFormData(newFormData);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin(formData);
  };

  return (
    <div className="flex flex-col gap-5 max-h-screen w-full">
      <h1 className="font-semibold text-[#043133] text-5xl">Welcome</h1>
      <LoginDetailsForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <GoogleAuthButton
        buttonLabel="Login with Google"
        inputUrl="src/assets/Google.png"
      />
    </div>
  );
}
