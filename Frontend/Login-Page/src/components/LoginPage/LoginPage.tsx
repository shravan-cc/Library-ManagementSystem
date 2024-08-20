import { LoginForm } from "../LoginForm/LoginForm";

export function LoginPage() {
  const handleLogin = async (formData: FormData) => {
    try {
      const response = await fetch("http://localhost:3001/members/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      console.log(JSON.stringify(Object.fromEntries(formData)));
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem("token", data.accessToken);
        window.location.href = "/home";
      } else {
        const data = await response.json();
        console.log("Data", data);
        alert("Login Failed");
      }
    } catch (e) {
      console.log(e);
      alert("Login Falied");
    }
  };

  return (
    <div className="grid grid-cols-[40%_60%] min-h-screen">
      <img
        src="src/assets/image.png"
        className="object-cover w-full h-[100vh]"
      />
      <div className="max-h-md p-[100px]">
        <LoginForm handleLogin={handleLogin} />
      </div>
    </div>
  );
}
