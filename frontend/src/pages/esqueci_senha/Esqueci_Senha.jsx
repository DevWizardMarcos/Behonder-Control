import { useState } from "react";
import "../../styles/pages/login.css";

import BannerLogin from "../../assets/images/inspiracao/esqueci.png";
import Fenix from "../../assets/images/fenix.png";
import { ArrowEnterIcon, EmailIcon } from "../../components/login/LoginIcons";

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path
        d="m14.5 6-6 6 6 6M9 12h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path
        d="m6 12.5 4 4L18.5 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ForgotPasswordPage({ onBackToLogin }) {
  const [username, setUsername] = useState("");
  const [submittedUsername, setSubmittedUsername] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedUsername(username.trim());
  }

  return (
    <main className="login-shell">
      <section
        className="login-card"
        aria-label="Recuperação de acesso Behonder Control"
      >
        <div className="login-card__art">
          <img
            src={BannerLogin}
            alt="Identidade visual da Behonder Control"
          />
        </div>

        <div className="login-card__panel">
          <div className="panel-content">
            <div className="hero-brand">
              <img
                className="hero-brand__icon"
                src={Fenix}
                alt="Identidade visual da Behonder Control"
              />
              <div className="hero-brand__title">
                <span className="hero-brand__line hero-brand__line--light">
                  Behonder
                </span>
                <span className="hero-brand__line hero-brand__line--accent">
                  Control
                </span>
                <p>Controle escolar em um só lugar.</p>
              </div>
            </div>

            {!submittedUsername ? (
              <>
                <div className="recovery-copy">
                  <h1>Recupere seu acesso</h1>
                  <p>
                    Informe o login usado no sistema para ver como solicitar a
                    redefinição da sua senha.
                  </p>
                </div>

                <form className="recovery-form" onSubmit={handleSubmit}>
                  <label className="field-group" htmlFor="recovery-login">
                    <span>LOGIN</span>
                    <div className="field-control">
                      <EmailIcon />
                      <input
                        id="recovery-login"
                        type="text"
                        autoComplete="username"
                        placeholder="Digite seu login"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        autoFocus
                        required
                      />
                    </div>
                  </label>

                  <p className="recovery-note">
                    <strong>Importante:</strong> por segurança, a senha é
                    redefinida pelo administrador do sistema.
                  </p>

                  <button type="submit" className="submit-button">
                    <ArrowEnterIcon />
                    <span>Continuar</span>
                  </button>
                </form>
              </>
            ) : (
              <div className="recovery-result" role="status">
                <span className="recovery-result__mark">
                  <CheckIcon />
                </span>
                <h2>Solicite uma nova senha</h2>
                <p>
                  Peça ao administrador da Behonder Control para redefinir a
                  senha do login <strong>{submittedUsername}</strong>.
                </p>
                <p>
                  Depois da redefinição, volte ao login e acesse com a nova
                  senha fornecida.
                </p>
              </div>
            )}

            <button
              type="button"
              className="back-to-login"
              onClick={onBackToLogin}
            >
              <BackIcon />
              Voltar para o login
            </button>

            <p className="panel-footer">
              © 2026 DevWizardMaros. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ForgotPasswordPage;
