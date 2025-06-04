"use client"

import { useState } from "react"
import "./App.css"

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simular login
    setTimeout(() => {
      console.log("Login realizado:", formData)
      alert("Login realizado com sucesso!")
      setIsLoading(false)
    }, 2000)
  }

  const goToHome = () => {
    // Aqui você redirecionaria para a página principal
    window.history.back()
  }

  const goToSignup = () => {
    // Aqui você redirecionaria para a página de cadastro
    console.log("Ir para cadastro")
  }

  return (
    <div className="app">
      {/* Header Simples */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo" onClick={goToHome} style={{ cursor: "pointer" }}>
              <div className="logo-icon">📅</div>
              <span className="logo-text">MenuPlan</span>
            </div>
            <nav className="nav">
              <button onClick={goToHome} className="nav-link">
                ← Voltar ao início
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Login Section */}
      <section className="login-section">
        <div className="container">
          <div className="login-container">
            <div className="login-content">
              <div className="login-header">
                <h1>Bem-vindo de volta!</h1>
                <p>Entre na sua conta para continuar organizando seus cardápios</p>
              </div>

              <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Senha</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Sua senha"
                    required
                  />
                </div>

                <div className="form-options">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark"></span>
                    Lembrar de mim
                  </label>
                  <a href="#" className="forgot-password">
                    Esqueceu a senha?
                  </a>
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary btn-full btn-large ${isLoading ? "loading" : ""}`}
                  disabled={isLoading}
                >
                  {isLoading ? "Entrando..." : "Entrar"}
                </button>
              </form>

              <div className="login-divider">
                <span>ou</span>
              </div>

              <div className="social-login">
                <button className="btn btn-outline btn-full social-btn">
                  <span className="social-icon">🔍</span>
                  Continuar com Google
                </button>
                <button className="btn btn-outline btn-full social-btn">
                  <span className="social-icon">📘</span>
                  Continuar com Facebook
                </button>
              </div>

              <div className="login-footer">
                <p>
                  Não tem uma conta?
                  <button onClick={goToSignup} className="link-button">
                    Cadastre-se gratuitamente
                  </button>
                </p>
              </div>
            </div>

            <div className="login-benefits">
              <h3>Por que usar o MenuPlan?</h3>
              <div className="benefit-list">
                <div className="benefit-item">
                  <div className="benefit-icon">⏰</div>
                  <div>
                    <h4>Economize Tempo</h4>
                    <p>Planeje toda semana em minutos</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">💰</div>
                  <div>
                    <h4>Economize Dinheiro</h4>
                    <p>Evite desperdícios e compras desnecessárias</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🥗</div>
                  <div>
                    <h4>Vida Mais Saudável</h4>
                    <p>Planeje refeições balanceadas</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">📱</div>
                  <div>
                    <h4>Acesso em Qualquer Lugar</h4>
                    <p>Sincronizado em todos seus dispositivos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Simples */}
      <footer className="simple-footer">
        <div className="container">
          <div className="simple-footer-content">
            <p>&copy; 2024 MenuPlan. Todos os direitos reservados.</p>
            <div className="footer-links">
              <a href="#">Termos de Uso</a>
              <a href="#">Política de Privacidade</a>
              <a href="#">Suporte</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
