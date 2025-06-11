"use client"

import { useState } from "react"

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-blue-600 text-white rounded flex items-center justify-center font-bold text-sm">
                MP
              </div>
              <span className="text-xl font-semibold text-gray-900">MenuPlan</span>
            </div>
            <nav
              className={`${isMenuOpen ? "flex" : "hidden"} md:flex items-center gap-8 absolute md:relative top-full md:top-auto left-0 right-0 md:left-auto md:right-auto bg-white md:bg-transparent flex-col md:flex-row p-4 md:p-0 border-t md:border-t-0 shadow-lg md:shadow-none`}
            >
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Recursos
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Preços
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Contato
              </button>
              <button
                onClick={goToLogin}
                className="px-4 py-2 border border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 rounded transition-colors font-medium"
              >
                Entrar
              </button>
              <button
                onClick={goToSignup}
                className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded transition-colors font-medium"
              >
                Começar Grátis
              </button>
            </nav>
            <button className="md:hidden text-gray-600 text-xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-5 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm mb-6 border border-blue-200 font-medium">
            Novo: Exportação em PDF disponível
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Organize seu cardápio semanal de forma simples
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Planeje suas refeições, economize tempo e dinheiro. Nossa plataforma intuitiva torna o planejamento de
            cardápios uma tarefa fácil e prazerosa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <button
              onClick={goToSignup}
              className="px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded transition-colors font-medium text-lg"
            >
              Começar Gratuitamente
            </button>
            <button className="px-8 py-3 border border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 rounded transition-colors font-medium text-lg">
              Ver Demonstração
            </button>
          </div>
          <p className="text-sm text-gray-500">Grátis para sempre • Sem cartão de crédito</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Recursos que facilitam sua vida</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tudo que você precisa para organizar suas refeições de forma eficiente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-gray-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
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
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Planejamento Semanal</h3>
              <p className="text-gray-600 leading-relaxed">
                Organize todas as refeições da semana em uma interface simples e intuitiva
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-gray-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
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
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Exportação PDF</h3>
              <p className="text-gray-600 leading-relaxed">
                Exporte seu cardápio em PDF para imprimir ou compartilhar facilmente
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-gray-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
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
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Acesso Mobile</h3>
              <p className="text-gray-600 leading-relaxed">
                Use em qualquer dispositivo - computador, tablet ou smartphone
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-gray-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
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
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Rápido e Fácil</h3>
              <p className="text-gray-600 leading-relaxed">
                Interface intuitiva que permite adicionar e remover itens com poucos cliques
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-gray-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
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
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Para Toda Família</h3>
              <p className="text-gray-600 leading-relaxed">
                Perfeito para famílias, restaurantes ou qualquer pessoa que quer se organizar
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-gray-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
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
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Sempre Salvo</h3>
              <p className="text-gray-600 leading-relaxed">
                Seus cardápios ficam salvos automaticamente, nunca perca seu planejamento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-5 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Planos Simples e Transparentes</h2>
            <p className="text-xl text-gray-600">Escolha o plano ideal para suas necessidades</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Gratuito</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">R$ 0</div>
                <p className="text-gray-600">Para sempre</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-3">✓</span>
                  Cardápios ilimitados
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-3">✓</span>
                  Exportação PDF
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-3">✓</span>
                  Suporte por email
                </li>
              </ul>
              <button
                onClick={goToSignup}
                className="w-full py-3 border border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 rounded transition-colors font-medium"
              >
                Começar Grátis
              </button>
            </div>

            <div className="bg-white rounded-lg p-8 border-2 border-blue-600 hover:shadow-lg transition-all relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Mais Popular
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Pro</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">R$ 19</div>
                <p className="text-gray-600">por mês</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-3">✓</span>
                  Tudo do plano Gratuito
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-3">✓</span>
                  Receitas integradas
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-3">✓</span>
                  Lista de compras automática
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-3">✓</span>
                  Suporte prioritário
                </li>
              </ul>
              <button
                onClick={goToSignup}
                className="w-full py-3 bg-blue-600 text-white hover:bg-blue-700 rounded transition-colors font-medium"
              >
                Começar Teste Grátis
              </button>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Família</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">R$ 39</div>
                <p className="text-gray-600">por mês</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-3">✓</span>
                  Tudo do plano Pro
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-3">✓</span>
                  Até 6 usuários
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-3">✓</span>
                  Planejamento nutricional
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-3">✓</span>
                  Relatórios avançados
                </li>
              </ul>
              <button
                onClick={goToSignup}
                className="w-full py-3 border border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 rounded transition-colors font-medium"
              >
                Começar Teste Grátis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-5 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Entre em Contato</h2>
            <p className="text-xl text-gray-600">Tem dúvidas? Estamos aqui para ajudar!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Fale Conosco</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Email</h4>
                  <p className="text-gray-600">contato@menuplan.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Telefone</h4>
                  <p className="text-gray-600">(11) 9999-9999</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Horário de Atendimento</h4>
                  <p className="text-gray-600">Segunda a Sexta, 9h às 18h</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Envie uma Mensagem</h3>
              <form className="space-y-4">
                <div>
                  <label className="block font-medium mb-2 text-gray-700">Nome</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2 text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2 text-gray-700">Mensagem</label>
                  <textarea
                    rows="4"
                    placeholder="Como podemos ajudar?"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white hover:bg-blue-700 rounded transition-colors font-medium"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center font-bold text-sm">
                  MP
                </div>
                <span className="text-xl font-semibold">MenuPlan</span>
              </div>
              <p className="text-gray-400">A forma mais simples de organizar suas refeições semanais.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Recursos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("pricing")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Preços
                  </button>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Carreiras
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contato
                  </button>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-4 text-center text-gray-400">
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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={goToHome}>
              <div className="w-9 h-9 bg-blue-600 text-white rounded flex items-center justify-center font-bold text-sm">
                MP
              </div>
              <span className="text-xl font-semibold text-gray-900">MenuPlan</span>
            </div>
            <nav>
              <button onClick={goToHome} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                ← Voltar ao início
              </button>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-12 px-5 min-h-[calc(100vh-140px)] flex items-center">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-200">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Bem-vindo de volta</h1>
                <p className="text-gray-600">Entre na sua conta para continuar organizando seus cardápios</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block font-medium mb-2 text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block font-medium mb-2 text-gray-700">
                    Senha
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Sua senha"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-colors"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="rounded"
                    />
                    Lembrar de mim
                  </label>
                  <a href="#" className="text-blue-600 hover:underline text-sm">
                    Esqueceu a senha?
                  </a>
                </div>

                <button
                  type="submit"
                  className={`w-full py-3 bg-blue-600 text-white hover:bg-blue-700 rounded transition-colors font-medium text-lg ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                  disabled={isLoading}
                >
                  {isLoading ? "Entrando..." : "Entrar"}
                </button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-600">ou</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 hover:border-blue-600 hover:text-blue-600 rounded transition-colors font-medium">
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
                  Continuar com Google
                </button>
                <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 hover:border-blue-600 hover:text-blue-600 rounded transition-colors font-medium">
                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M24 12.073c0-5.8-4.702-10.5-10.5-10.5s-10.5 4.7-10.5 10.5c0 5.24 3.84 9.584 8.86 10.373v-7.337h-2.666v-3.037h2.666V9.86c0-2.63 1.568-4.085 3.97-4.085 1.15 0 2.35.205 2.35.205v2.584h-1.322c-1.304 0-1.71.81-1.71 1.64v1.97h2.912l-.465 3.036H16.16v7.337c5.02-.788 8.84-5.131 8.84-10.373z"
                      fill="#1877F2"
                    />
                  </svg>
                  Continuar com Facebook
                </button>
              </div>

              <div className="text-center mt-6 text-gray-600">
                <p>
                  Não tem uma conta?
                  <button onClick={goToSignup} className="text-blue-600 hover:underline ml-1">
                    Cadastre-se gratuitamente
                  </button>
                </p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold mb-8 text-gray-900">Por que usar o MenuPlan?</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-gray-100 text-blue-600 rounded flex items-center justify-center flex-shrink-0">
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
                    <h4 className="font-semibold text-gray-900 mb-1">Economize Tempo</h4>
                    <p className="text-gray-600 text-sm">Planeje toda semana em minutos</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-gray-100 text-blue-600 rounded flex items-center justify-center flex-shrink-0">
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
                    <h4 className="font-semibold text-gray-900 mb-1">Economize Dinheiro</h4>
                    <p className="text-gray-600 text-sm">Evite desperdícios e compras desnecessárias</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-gray-100 text-blue-600 rounded flex items-center justify-center flex-shrink-0">
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
                    <h4 className="font-semibold text-gray-900 mb-1">Vida Mais Saudável</h4>
                    <p className="text-gray-600 text-sm">Planeje refeições balanceadas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-gray-100 text-blue-600 rounded flex items-center justify-center flex-shrink-0">
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
                    <h4 className="font-semibold text-gray-900 mb-1">Acesso em Qualquer Lugar</h4>
                    <p className="text-gray-600 text-sm">Sincronizado em todos seus dispositivos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 py-6 px-5 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600">&copy; 2024 MenuPlan. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Suporte
              </a>
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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={goToHome}>
              <div className="w-9 h-9 bg-blue-600 text-white rounded flex items-center justify-center font-bold text-sm">
                MP
              </div>
              <span className="text-xl font-semibold text-gray-900">MenuPlan</span>
            </div>
            <nav>
              <button onClick={goToHome} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                ← Voltar ao início
              </button>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-12 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-200">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Comece gratuitamente</h1>
                <p className="text-gray-600 mb-8">
                  Crie sua conta e transforme a forma como você planeja suas refeições
                </p>

                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between mb-4">
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${currentStep >= 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
                      >
                        1
                      </div>
                      <label className={`text-sm font-medium ${currentStep >= 1 ? "text-blue-600" : "text-gray-600"}`}>
                        Dados pessoais
                      </label>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${currentStep >= 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
                      >
                        2
                      </div>
                      <label className={`text-sm font-medium ${currentStep >= 2 ? "text-blue-600" : "text-gray-600"}`}>
                        Escolha seu plano
                      </label>
                    </div>
                  </div>
                  <div className="h-0.5 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-blue-600 rounded-full transition-all duration-300"
                      style={{ width: `${(currentStep - 1) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block font-medium mb-2 text-gray-700">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-medium mb-2 text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="password" className="block font-medium mb-2 text-gray-700">
                        Senha
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Mínimo 8 caracteres"
                        minLength="8"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="confirmPassword" className="block font-medium mb-2 text-gray-700">
                        Confirmar senha
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Digite a senha novamente"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-blue-600 text-white hover:bg-blue-700 rounded transition-colors font-medium text-lg"
                    >
                      Continuar
                    </button>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Escolha seu plano</h3>
                      <p className="text-gray-600">Você pode mudar de plano a qualquer momento</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div
                        className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${formData.plan === "free" ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-blue-600"}`}
                        onClick={() => selectPlan("free")}
                      >
                        <div className="text-center">
                          <h4 className="text-lg font-semibold mb-2 text-gray-900">Gratuito</h4>
                          <div className="text-2xl font-bold text-blue-600 mb-4">
                            R$ 0<span className="text-sm text-gray-600">/mês</span>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center text-gray-600">
                            <span className="text-green-500 mr-2">✓</span>
                            Cardápios ilimitados
                          </li>
                          <li className="flex items-center text-gray-600">
                            <span className="text-green-500 mr-2">✓</span>
                            Exportação PDF
                          </li>
                          <li className="flex items-center text-gray-600">
                            <span className="text-green-500 mr-2">✓</span>
                            Suporte por email
                          </li>
                        </ul>
                      </div>

                      <div
                        className={`border-2 rounded-lg p-6 cursor-pointer transition-all relative ${formData.plan === "pro" ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-blue-600"}`}
                        onClick={() => selectPlan("pro")}
                      >
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          Mais Popular
                        </div>
                        <div className="text-center">
                          <h4 className="text-lg font-semibold mb-2 text-gray-900">Pro</h4>
                          <div className="text-2xl font-bold text-blue-600 mb-4">
                            R$ 19<span className="text-sm text-gray-600">/mês</span>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center text-gray-600">
                            <span className="text-green-500 mr-2">✓</span>
                            Tudo do plano Gratuito
                          </li>
                          <li className="flex items-center text-gray-600">
                            <span className="text-green-500 mr-2">✓</span>
                            Receitas integradas
                          </li>
                          <li className="flex items-center text-gray-600">
                            <span className="text-green-500 mr-2">✓</span>
                            Lista de compras automática
                          </li>
                          <li className="flex items-center text-gray-600">
                            <span className="text-green-500 mr-2">✓</span>
                            Suporte prioritário
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="acceptTerms"
                          checked={formData.acceptTerms}
                          onChange={handleInputChange}
                          required
                          className="mt-1 rounded"
                        />
                        <span className="text-sm text-gray-600">
                          Aceito os{" "}
                          <a href="#" className="text-blue-600 hover:underline">
                            Termos de Uso
                          </a>{" "}
                          e{" "}
                          <a href="#" className="text-blue-600 hover:underline">
                            Política de Privacidade
                          </a>
                        </span>
                      </label>

                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleInputChange}
                          className="mt-1 rounded"
                        />
                        <span className="text-sm text-gray-600">Quero receber dicas e novidades por email</span>
                      </label>
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        className="flex-1 py-3 border border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 rounded transition-colors font-medium"
                        onClick={() => setCurrentStep(1)}
                      >
                        Voltar
                      </button>
                      <button
                        type="submit"
                        className={`flex-1 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded transition-colors font-medium ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                        disabled={isLoading}
                      >
                        {isLoading ? "Criando conta..." : "Criar conta"}
                      </button>
                    </div>
                  </div>
                )}
              </form>

              <div className="text-center mt-6 text-gray-600">
                <p>
                  Já tem uma conta?
                  <button onClick={goToLogin} className="text-blue-600 hover:underline ml-1">
                    Faça login
                  </button>
                </p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-lg border border-gray-200">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <div>
                  <p className="italic text-gray-600 mb-4 leading-relaxed">
                    "O MenuPlan mudou completamente como organizo as refeições da minha família. Economizo tempo e
                    dinheiro!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                      MR
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Maria Rosa</div>
                      <div className="text-gray-600 text-xs">Mãe de 3 filhos</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="text-xl font-bold text-blue-600 mb-1">10.000+</div>
                  <div className="text-xs text-gray-600">Usuários ativos</div>
                </div>
                <div className="text-center bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="text-xl font-bold text-blue-600 mb-1">50.000+</div>
                  <div className="text-xs text-gray-600">Cardápios criados</div>
                </div>
                <div className="text-center bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="text-xl font-bold text-blue-600 mb-1">4.9/5</div>
                  <div className="text-xs text-gray-600">Avaliação média</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 py-6 px-5 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600">&copy; 2024 MenuPlan. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Suporte
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
