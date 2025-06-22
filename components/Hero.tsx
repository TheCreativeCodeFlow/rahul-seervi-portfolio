"use client"

import { useState, useEffect } from "react"
import { Download, ArrowDown, Github, Linkedin, Mail } from "lucide-react"

const Hero = () => {
  const [text, setText] = useState("")
  const fullText = "B.Tech CSE Student | Big Data Analytics Specialist"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const handleDownloadResume = () => {
    // Create a dummy resume download
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Rahul_Seervi_Resume.pdf"
    link.click()
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-orange/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom section-padding text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-orange to-primary-blue p-1">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-blue">RS</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Rahul Seervi</span>
          </h1>

          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about creating innovative solutions with Java, React, and modern web technologies. Currently
            exploring the fascinating world of Big Data Analytics.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button onClick={handleDownloadResume} className="btn-primary flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
            <a href="#projects" className="btn-secondary flex items-center justify-center gap-2">
              View Projects
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/TheCreativeCodeFlow"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-orange hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-seervi-a14440289/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-blue hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:seervirahul2004@gmail.com"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-orange hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce-slow">
            <ArrowDown className="w-6 h-6 mx-auto text-primary-orange" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
