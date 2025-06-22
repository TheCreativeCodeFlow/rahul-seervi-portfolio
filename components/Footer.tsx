"use client"

import { useState } from "react"
import { Heart, Github, Linkedin, Mail, ArrowUp, Copy, CheckCircle } from "lucide-react"

const Footer = () => {
  const [emailCopied, setEmailCopied] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleEmailClick = async () => {
    const email = "seervirahul2004@gmail.com"

    try {
      // Try mailto first
      window.location.href = `mailto:${email}`
    } catch (error) {
      // If mailto fails, copy to clipboard
      try {
        await navigator.clipboard.writeText(email)
        setEmailCopied(true)
        setTimeout(() => setEmailCopied(false), 3000)
      } catch (clipboardError) {
        // If clipboard fails, show alert
        alert(`Email: ${email}\n\nPlease copy this email address manually.`)
      }
    }
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/TheCreativeCodeFlow",
      label: "GitHub",
      onClick: null,
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/rahul-seervi-a14440289/?originalSubdomain=in",
      label: "LinkedIn",
      onClick: null,
    },
    {
      icon: emailCopied ? <CheckCircle className="w-5 h-5" /> : <Mail className="w-5 h-5" />,
      href: null,
      label: emailCopied ? "Email Copied!" : "Email",
      onClick: handleEmailClick,
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Rahul Seervi</h3>
            <p className="text-gray-400 leading-relaxed">
              B.Tech CSE Student specializing in Big Data Analytics. Passionate about creating innovative solutions with
              modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) =>
                social.onClick ? (
                  <button
                    key={index}
                    onClick={social.onClick}
                    className={`p-2 rounded-lg transition-colors duration-300 hover:scale-110 ${
                      emailCopied ? "bg-green-600 text-white" : "bg-gray-800 hover:bg-primary-orange"
                    }`}
                    aria-label={social.label}
                    title={social.label}
                  >
                    {social.icon}
                  </button>
                ) : (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-800 hover:bg-primary-orange transition-colors duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ),
              )}
            </div>

            {/* Email Display */}
            {emailCopied && (
              <div className="animate-in fade-in-0 duration-500">
                <div className="inline-flex items-center px-3 py-2 bg-green-900/30 border border-green-500/30 rounded-lg text-green-400 text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Email copied to clipboard!
                </div>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-orange transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center justify-between">
                <span>📧 seervirahul2004@gmail.com</span>
                <button
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText("seervirahul2004@gmail.com")
                      setEmailCopied(true)
                      setTimeout(() => setEmailCopied(false), 3000)
                    } catch (error) {
                      alert("Email: seervirahul2004@gmail.com")
                    }
                  }}
                  className="p-1 rounded hover:bg-gray-700 transition-colors duration-300"
                  title="Copy email"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              <p>📱 +91 8583024122</p>
              <p>📍 India</p>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-400">Open to new opportunities and collaborations</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Rahul Seervi. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and lots of ☕</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-gray-800 hover:bg-primary-orange transition-colors duration-300 hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
