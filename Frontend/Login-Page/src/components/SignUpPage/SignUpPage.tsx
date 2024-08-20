/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthForm } from "../AuthForm/AuthForm";

export function SignUpPage() {
  const handleSignUp = async (formData: FormData) => {
    try {
      const response = await fetch("http://localhost:3001/members/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (response.ok) {
        window.location.href = "/login";
      } else {
        alert("signup failed");
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };
  return (
    <div className="grid grid-cols-[40%_60%] min-h-screen">
      <img
        src="src/assets/image.png"
        className="object-cover w-full h-[100vh]"
      />
      <div className="px-[50px] max-h-md p-[30px]">
        <AuthForm onSubmit={handleSignUp} />
      </div>
    </div>
  );
}
