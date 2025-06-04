"use client"

import { useState } from "react"
import "./App.css"

export default function Signup() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    plan: "free",
    acceptTerms: false,
    newsletter: true,
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

    if (currentStep === 1) {
      // Validar primeira etapa
      if (formData.password !== formData.confirmPassword) {
        alert("As senhas não coincidem!")
        return
      }
      setCurrentStep(2)
    } else {
      // Finalizar cadastro
      if (!formData.acceptTerms) {
        alert("Você deve aceitar os termos de uso!")
        return
      }

      setIsLoading(true)
      setTimeout(() => {
        console.log("Cadastro realizado:", formData)
        alert("Cadastro realizado com sucesso! Bem-vindo ao MenuPlan!")
        setIsLoading(false)
      }, 2000)
    }
  }

  const goToHome = () => {
    window.history.back()
  }

  const goToLogin = () => {
    console.log("Ir para login")
  }

  const selectPlan = (plan) => {
    setFormData((prev) => ({ ...prev, plan }))
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

      {/* Signup Section */}
      <section className="signup-section">
        <div className="container">
          <div className="signup-container">
            <div className="signup-content">
              <div className="signup-header">
                <h1>Comece gratuitamente!</h1>
                <p>Crie sua conta e transforme a forma como você planeja suas refeições</p>

                {/* Progress Bar */}
                <div className="progress-bar">
                  <div className="progress-steps">
                    <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
                      <span>1</span>
                      <label>Dados pessoais</label>
                    </div>
                    <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
                      <span>2</span>
                      <label>Escolha seu plano</label>
                    </div>
                  </div>
                  <div className="progress-line">
                    <div className="progress-fill" style={{ width: `${(currentStep - 1) * 100}%` }}></div>
                  </div>
                </div>
              </div>

              <form className="signup-form" onSubmit={handleSubmit}>
                {currentStep === 1 && (
                  <div className="step-content">
                    <div className="form-group">
                      <label htmlFor="name">Nome completo</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>

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
                        placeholder="Mínimo 8 caracteres"
                        minLength="8"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="confirmPassword">Confirmar senha</label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Digite a senha novamente"
                        required
                      />
                    </div>

                    <button type="submit" className="btn btn-primary btn-full btn-large">
                      Continuar
                    </button>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="step-content">
                    <h3>Escolha seu plano</h3>
                    <p>Você pode mudar de plano a qualquer momento</p>

                    <div className="plans-grid">
                      <div
                        className={`plan-card ${formData.plan === "free" ? "selected" : ""}`}
                        onClick={() => selectPlan("free")}
                      >
                        <div className="plan-header">
                          <h4>Gratuito</h4>
                          <div className="plan-price">
                            R$ 0<span>/mês</span>
                          </div>
                        </div>
                        <ul className="plan-features">
                          <li>✅ Cardápios ilimitados</li>
                          <li>✅ Exportação PDF</li>
                          <li>✅ Suporte por email</li>
                        </ul>
                      </div>

                      <div
                        className={`plan-card ${formData.plan === "pro" ? "selected" : ""}`}
                        onClick={() => selectPlan("pro")}
                      >
                        <div className="plan-badge">Mais Popular</div>
                        <div className="plan-header">
                          <h4>Pro</h4>
                          <div className="plan-price">
                            R$ 19<span>/mês</span>
                          </div>
                        </div>
                        <ul className="plan-features">
                          <li>✅ Tudo do plano Gratuito</li>
                          <li>✅ Receitas integradas</li>
                          <li>✅ Lista de compras automática</li>
                          <li>✅ Suporte prioritário</li>
                        </ul>
                      </div>
                    </div>

                    <div className="form-options">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="acceptTerms"
                          checked={formData.acceptTerms}
                          onChange={handleInputChange}
                          required
                        />
                        <span className="checkmark"></span>
                        Aceito os <a href="#">Termos de Uso</a> e <a href="#">Política de Privacidade</a>
                      </label>

                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        Quero receber dicas e novidades por email
                      </label>
                    </div>

                    <div className="form-buttons">
                      <button type="button" className="btn btn-outline btn-large" onClick={() => setCurrentStep(1)}>
                        Voltar
                      </button>
                      <button
                        type="submit"
                        className={`btn btn-primary btn-large ${isLoading ? "loading" : ""}`}
                        disabled={isLoading}
                      >
                        {isLoading ? "Criando conta..." : "Criar conta"}
                      </button>
                    </div>
                  </div>
                )}
              </form>

              <div className="signup-footer">
                <p>
                  Já tem uma conta?
                  <button onClick={goToLogin} className="link-button">
                    Faça login
                  </button>
                </p>
              </div>
            </div>

            <div className="signup-testimonial">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    "O MenuPlan mudou completamente como organizo as refeições da minha família. Economizo tempo e
                    dinheiro!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">MR</div>
                    <div>
                      <strong>Maria Rosa</strong>
                      <span>Mãe de 3 filhos</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="signup-stats">
                <div className="stat">
                  <strong>10.000+</strong>
                  <span>Usuários ativos</span>
                </div>
                <div className="stat">
                  <strong>50.000+</strong>
                  <span>Cardápios criados</span>
                </div>
                <div className="stat">
                  <strong>4.9/5</strong>
                  <span>Avaliação média</span>
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
