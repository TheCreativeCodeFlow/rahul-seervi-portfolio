"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Copy,
  CheckCircle,
  Code,
  Database,
  Smartphone,
} from "lucide-react"
import LoadingScreen from "@/components/LoadingScreens"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [text, setText] = useState("")
  const [emailCopied, setEmailCopied] = useState(false)
  const fullText = "B.Tech CSE Student | Big Data Analytics Specialist"

  useEffect(() => {
    if (!loading) {
      let index = 0
      const timer = setInterval(() => {
        setText(fullText.slice(0, index))
        index++
        if (index > fullText.length) {
          clearInterval(timer)
        }
      }, 100)

      return () => clearInterval(timer)
    }
  }, [loading])

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Rahul_Seervi_Resume.pdf"
    link.click()
  }

  const handleEmailClick = async () => {
    const email = "seervirahul2004@gmail.com"

    // Try mailto first
    try {
      window.location.href = `mailto:${email}`
    } catch (error) {
      // If mailto fails, copy to clipboard
      try {
        await navigator.clipboard.writeText(email)
        setEmailCopied(true)
        setTimeout(() => setEmailCopied(false), 3000)
      } catch (clipboardError) {
        // If clipboard fails, show alert with email
        alert(`Email: ${email}\n\nPlease copy this email address manually.`)
      }
    }
  }

  const quickStats = [
    { icon: <Code className="w-6 h-6" />, label: "Projects", value: "15+" },
    { icon: <Database className="w-6 h-6" />, label: "Technologies", value: "10+" },
    { icon: <Smartphone className="w-6 h-6" />, label: "Experience", value: "2+ Years" },
  ]

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} type="home" />
  }

  return (
    <div className="min-h-screen bg-black text-white page-transition">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-orange/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container-custom section-padding text-center">
          <div className="animate-fade-in">
            {/* Profile Image */}
            <div className="mb-8">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-r from-primary-orange to-primary-blue p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <Image src="/images/rs-logo-simple.svg" alt="RS Logo" width={60} height={60} className="object-contain" />
                </div>
              </div>
            </div>

            {/* Main Content */}
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Rahul Seervi</span>
            </h1>

            <div className="h-12 sm:h-16 mb-8">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400">
                {text}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Passionate about creating innovative solutions with Java, React, and modern web technologies. Currently
              exploring the fascinating world of Big Data Analytics.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 px-4">
              <button onClick={handleDownloadResume} className="btn-primary flex items-center justify-center gap-2">
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download Resume
              </button>
              <Link href="/projects" className="btn-secondary flex items-center justify-center gap-2">
                View Projects
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12">
              <a
                href="https://github.com/TheCreativeCodeFlow"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-primary-orange hover:text-white transition-all duration-300 hover:scale-110"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-seervi-a14440289/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-primary-blue hover:text-white transition-all duration-300 hover:scale-110"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <button
                onClick={handleEmailClick}
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  emailCopied ? "bg-green-600 text-white" : "bg-gray-800 hover:bg-primary-orange hover:text-white"
                }`}
                title={emailCopied ? "Email copied!" : "Contact via Email"}
              >
                {emailCopied ? (
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>

            {/* Email Display */}
            {emailCopied && (
              <div className="mb-8 animate-in fade-in-0 duration-500">
                <div className="inline-flex items-center px-4 py-2 bg-green-900/30 border border-green-500/30 rounded-lg text-green-400">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm">Email copied: seervirahul2004@gmail.com</span>
                </div>
              </div>
            )}

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto px-4">
              {quickStats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm">
                  <div className="text-primary-orange mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="section-padding bg-gray-900/30">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Explore My Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: "About Me", href: "/about", description: "Learn about my journey" },
              { title: "Skills", href: "/skills", description: "Technical expertise" },
              { title: "Projects", href: "/projects", description: "Featured work" },
              { title: "Contact", href: "/contact", description: "Get in touch" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 card-hover"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-primary-orange transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
                <ArrowRight className="w-5 h-5 text-primary-orange mt-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Email Alternatives */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Multiple Ways to Reach Me</h2>
            <p className="text-gray-400 mb-8">Choose your preferred method of contact</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {/* Direct Email */}
            <div className="p-4 bg-gray-900 rounded-lg text-center">
              <Mail className="w-8 h-8 text-primary-orange mx-auto mb-2" />
              <h3 className="font-semibold text-white mb-2">Direct Email</h3>
              <p className="text-xs text-gray-400 mb-3">seervirahul2004@gmail.com</p>
              <button onClick={handleEmailClick} className="w-full btn-primary text-sm py-2">
                Send Email
              </button>
            </div>

            {/* Copy Email */}
            <div className="p-4 bg-gray-900 rounded-lg text-center">
              <Copy className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white mb-2">Copy Email</h3>
              <p className="text-xs text-gray-400 mb-3">Copy to clipboard</p>
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
                className="w-full btn-secondary text-sm py-2"
              >
                {emailCopied ? "Copied!" : "Copy Email"}
              </button>
            </div>

            {/* Contact Form */}
            <div className="p-4 bg-gray-900 rounded-lg text-center">
              <Mail className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white mb-2">Contact Form</h3>
              <p className="text-xs text-gray-400 mb-3">Use our contact page</p>
              <Link href="/contact" className="w-full btn-secondary text-sm py-2 block">
                Contact Form
              </Link>
            </div>

            {/* LinkedIn Message */}
            <div className="p-4 bg-gray-900 rounded-lg text-center">
              <Linkedin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-xs text-gray-400 mb-3">Professional network</p>
              <a
                href="https://www.linkedin.com/in/rahul-seervi-a14440289/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-secondary text-sm py-2 block"
              >
                Message Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
