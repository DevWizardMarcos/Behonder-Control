import { useState } from "react";
import LoginPage from "../pages/login/LoginPage";
import ForgotPasswordPage from "../pages/esqueci_senha/Esqueci_Senha";
import Dashbording from "../pages/dashbording/Dashbording";

function App() {
  const [token, setToken] = useState(() => localStorage.getItem("access_token"));
  const [authView, setAuthView] = useState("login");

  function handleLoginSuccess(newToken) {
    localStorage.setItem("access_token", newToken);
    setToken(newToken);
  }

  if (!token) {
    if (authView === "forgot-password") {
      return <ForgotPasswordPage onBackToLogin={() => setAuthView("login")} />;
    }

    return (
      <LoginPage
        onLoginSuccess={handleLoginSuccess}
        onForgotPassword={() => setAuthView("forgot-password")}
      />
    );
  }

  return <Dashbording />;
}

export default App;
