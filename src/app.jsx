"use client"

import { useState } from "react"
import "./index.css"
import "./auth-styles.css"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home") // 'home', 'login', 'signup'
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const goToLogin = () => {
    setCurrentPage("login")
  }

  const goToSignup = () => {
    setCurrentPage("signup")
  }

  const goToHome = () => {
    setCurrentPage("home")
  }

  // Renderizar página baseada no estado
  if (currentPage === "login") {
    return <LoginPage goToHome={goToHome} goToSignup={goToSignup} />
  }

  if (currentPage === "signup") {
    return <SignupPage goToHome={goToHome} goToLogin={goToLogin} />
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <div className="logo-icon">MP</div>
              <span className="logo-text">MenuPlan</span>
            </div>
            <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
              <button onClick={() => scrollToSection("features")} className="nav-link">
                Recursos
              </button>
              <button onClick={() => scrollToSection("pricing")} className="nav-link">
                Preços
              </button>
              <button onClick={() => scrollToSection("contact")} className="nav-link">
                Contato
              </button>
              <button onClick={goToLogin} className="btn btn-outline">
                Entrar
              </button>
              <button onClick={goToSignup} className="btn btn-primary">
                Começar Grátis
              </button>
            </nav>
            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="badge">Novo: Exportação em PDF disponível</div>
            <h1 className="hero-title">Organize seu cardápio semanal de forma simples</h1>
            <p className="hero-subtitle">
              Planeje suas refeições, economize tempo e dinheiro. Nossa plataforma intuitiva torna o planejamento de
              cardápios uma tarefa fácil e prazerosa.
            </p>
            <div className="hero-buttons">
              <button onClick={goToSignup} className="btn btn-primary btn-large">
                Começar Gratuitamente
              </button>
              <button className="btn btn-outline btn-large">Ver Demonstração</button>
            </div>
            <p className="hero-note">Grátis para sempre • Sem cartão de crédito</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Recursos que facilitam sua vida</h2>
            <p className="section-subtitle">Tudo que você precisa para organizar suas refeições de forma eficiente</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h3 className="feature-title">Planejamento Semanal</h3>
              <p className="feature-description">
                Organize todas as refeições da semana em uma interface simples e intuitiva
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="feature-title">Exportação PDF</h3>
              <p className="feature-description">
                Exporte seu cardápio em PDF para imprimir ou compartilhar facilmente
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <h3 className="feature-title">Acesso Mobile</h3>
              <p className="feature-description">Use em qualquer dispositivo - computador, tablet ou smartphone</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3 className="feature-title">Rápido e Fácil</h3>
              <p className="feature-description">
                Interface intuitiva que permite adicionar e remover itens com poucos cliques
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="feature-title">Para Toda Família</h3>
              <p className="feature-description">
                Perfeito para famílias, restaurantes ou qualquer pessoa que quer se organizar
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="feature-title">Sempre Salvo</h3>
              <p className="feature-description">
                Seus cardápios ficam salvos automaticamente, nunca perca seu planejamento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Planos Simples e Transparentes</h2>
            <p className="section-subtitle">Escolha o plano ideal para suas necessidades</p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-title">Gratuito</h3>
                <div className="pricing-price">R$ 0</div>
                <p className="pricing-period">Para sempre</p>
              </div>
              <ul className="pricing-features">
                <li>✓ Cardápios ilimitados</li>
                <li>✓ Exportação PDF</li>
                <li>✓ Suporte por email</li>
              </ul>
              <button onClick={goToSignup} className="btn btn-outline btn-full">
                Começar Grátis
              </button>
            </div>

            <div className="pricing-card pricing-popular">
              <div className="popular-badge">Mais Popular</div>
              <div className="pricing-header">
                <h3 className="pricing-title">Pro</h3>
                <div className="pricing-price">R$ 19</div>
                <p className="pricing-period">por mês</p>
              </div>
              <ul className="pricing-features">
                <li>✓ Tudo do plano Gratuito</li>
                <li>✓ Receitas integradas</li>
                <li>✓ Lista de compras automática</li>
                <li>✓ Suporte prioritário</li>
              </ul>
              <button onClick={goToSignup} className="btn btn-primary btn-full">
                Começar Teste Grátis
              </button>
            </div>

            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-title">Família</h3>
                <div className="pricing-price">R$ 39</div>
                <p className="pricing-period">por mês</p>
              </div>
              <ul className="pricing-features">
                <li>✓ Tudo do plano Pro</li>
                <li>✓ Até 6 usuários</li>
                <li>✓ Planejamento nutricional</li>
                <li>✓ Relatórios avançados</li>
              </ul>
              <button onClick={goToSignup} className="btn btn-outline btn-full">
                Começar Teste Grátis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Entre em Contato</h2>
            <p className="section-subtitle">Tem dúvidas? Estamos aqui para ajudar!</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <h3>Fale Conosco</h3>
              <div className="contact-item">
                <h4>Email</h4>
                <p>contato@menuplan.com</p>
              </div>
              <div className="contact-item">
                <h4>Telefone</h4>
                <p>(11) 9999-9999</p>
              </div>
              <div className="contact-item">
                <h4>Horário de Atendimento</h4>
                <p>Segunda a Sexta, 9h às 18h</p>
              </div>
            </div>

            <div className="contact-form-card">
              <h3>Envie uma Mensagem</h3>
              <form className="contact-form">
                <div className="form-group">
                  <label>Nome</label>
                  <input type="text" placeholder="Seu nome" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="seu@email.com" />
                </div>
                <div className="form-group">
                  <label>Mensagem</label>
                  <textarea rows="4" placeholder="Como podemos ajudar?"></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <div className="logo-icon">MP</div>
                <span className="logo-text">MenuPlan</span>
              </div>
              <p>A forma mais simples de organizar suas refeições semanais.</p>
            </div>
            <div className="footer-section">
              <h3>Produto</h3>
              <ul>
                <li>
                  <button onClick={() => scrollToSection("features")}>Recursos</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("pricing")}>Preços</button>
                </li>
                <li>
                  <a href="#">API</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Empresa</h3>
              <ul>
                <li>
                  <a href="#">Sobre</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Carreiras</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Suporte</h3>
              <ul>
                <li>
                  <button onClick={() => scrollToSection("contact")}>Contato</button>
                </li>
                <li>
                  <a href="#">Central de Ajuda</a>
                </li>
                <li>
                  <a href="#">Status</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 MenuPlan. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Componente de Login
function LoginPage({ goToHome, goToSignup }) {
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

    setTimeout(() => {
      console.log("Login realizado:", formData)
      alert("Login realizado com sucesso!")
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo" onClick={goToHome} style={{ cursor: "pointer" }}>
              <div className="logo-icon">MP</div>
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

      <section className="login-section">
        <div className="container">
          <div className="login-container">
            <div className="login-content">
              <div className="login-header">
                <h1>Bem-vindo de volta</h1>
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
                  <span className="social-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                  </span>
                  Continuar com Google
                </button>
                <button className="btn btn-outline btn-full social-btn">
                  <span className="social-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M24 12.073c0-5.8-4.702-10.5-10.5-10.5s-10.5 4.7-10.5 10.5c0 5.24 3.84 9.584 8.86 10.373v-7.337h-2.666v-3.037h2.666V9.86c0-2.63 1.568-4.085 3.97-4.085 1.15 0 2.35.205 2.35.205v2.584h-1.322c-1.304 0-1.71.81-1.71 1.64v1.97h2.912l-.465 3.036H16.16v7.337c5.02-.788 8.84-5.131 8.84-10.373z"
                        fill="#1877F2"
                      />
                    </svg>
                  </span>
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
                  <div className="benefit-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4>Economize Tempo</h4>
                    <p>Planeje toda semana em minutos</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <div>
                    <h4>Economize Dinheiro</h4>
                    <p>Evite desperdícios e compras desnecessárias</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4>Vida Mais Saudável</h4>
                    <p>Planeje refeições balanceadas</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                  </div>
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

// Componente de Signup
function SignupPage({ goToHome, goToLogin }) {
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
      if (formData.password !== formData.confirmPassword) {
        alert("As senhas não coincidem!")
        return
      }
      setCurrentStep(2)
    } else {
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

  const selectPlan = (plan) => {
    setFormData((prev) => ({ ...prev, plan }))
  }

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo" onClick={goToHome} style={{ cursor: "pointer" }}>
              <div className="logo-icon">MP</div>
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

      <section className="signup-section">
        <div className="container">
          <div className="signup-container">
            <div className="signup-content">
              <div className="signup-header">
                <h1>Comece gratuitamente</h1>
                <p>Crie sua conta e transforme a forma como você planeja suas refeições</p>

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
                          <li>✓ Cardápios ilimitados</li>
                          <li>✓ Exportação PDF</li>
                          <li>✓ Suporte por email</li>
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
                          <li>✓ Tudo do plano Gratuito</li>
                          <li>✓ Receitas integradas</li>
                          <li>✓ Lista de compras automática</li>
                          <li>✓ Suporte prioritário</li>
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
