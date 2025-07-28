"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  Code,
  User,
  Wrench,
  FolderOpen,
  Mail,
  Sparkles,
  Database,
  Globe,
  Terminal,
  Zap,
  Heart,
  Star,
  Cpu,
  Layers,
  GitBranch,
  Smartphone,
} from "lucide-react"

interface LoadingScreenProps {
  onComplete: () => void
  type?: "home" | "about" | "skills" | "projects" | "contact"
}

const LoadingScreen = ({ onComplete, type = "home" }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(timer)
  }, [onComplete])

  // Message rotation for dynamic loading text
  useEffect(() => {
    const messageTimer = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % loadingConfigs[type].messages.length)
    }, 1500)

    return () => clearInterval(messageTimer)
  }, [type])

  const loadingConfigs = {
    home: {
      title: "Welcome to My Portfolio",
      subtitle: "Initializing experience...",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-primary-orange to-yellow-500",
      bgPattern: "from-primary-orange/10 via-yellow-500/5 to-primary-blue/10",
      messages: [
        "Loading portfolio data...",
        "Preparing interactive elements...",
        "Setting up animations...",
        "Almost ready to showcase!",
      ],
      particles: [
        { icon: <Code className="w-4 h-4" />, delay: "0s", position: { x: 20, y: 30 } },
        { icon: <Database className="w-4 h-4" />, delay: "0.5s", position: { x: 70, y: 20 } },
        { icon: <Globe className="w-4 h-4" />, delay: "1s", position: { x: 80, y: 60 } },
        { icon: <Terminal className="w-4 h-4" />, delay: "1.5s", position: { x: 15, y: 70 } },
        { icon: <Zap className="w-4 h-4" />, delay: "2s", position: { x: 60, y: 80 } },
      ],
      specialEffect: "matrix-rain",
    },
    about: {
      title: "Loading About Me",
      subtitle: "Preparing my story...",
      icon: <User className="w-8 h-8" />,
      color: "from-blue-500 to-primary-blue",
      bgPattern: "from-blue-500/10 via-primary-blue/5 to-purple-500/10",
      messages: [
        "Compiling personal journey...",
        "Loading achievements...",
        "Preparing timeline data...",
        "Ready to share my story!",
      ],
      particles: [
        { icon: <User className="w-4 h-4" />, delay: "0s", position: { x: 25, y: 25 } },
        { icon: <Heart className="w-4 h-4" />, delay: "0.3s", position: { x: 75, y: 30 } },
        { icon: <Star className="w-4 h-4" />, delay: "0.6s", position: { x: 20, y: 65 } },
        { icon: <Code className="w-4 h-4" />, delay: "0.9s", position: { x: 80, y: 70 } },
      ],
      specialEffect: "floating-bubbles",
    },
    skills: {
      title: "Loading Skills",
      subtitle: "Compiling expertise...",
      icon: <Wrench className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      bgPattern: "from-green-500/10 via-emerald-500/5 to-teal-500/10",
      messages: [
        "Analyzing technical skills...",
        "Loading proficiency levels...",
        "Organizing skill categories...",
        "Skills compilation complete!",
      ],
      particles: [
        { icon: <Wrench className="w-4 h-4" />, delay: "0s", position: { x: 30, y: 20 } },
        { icon: <Code className="w-4 h-4" />, delay: "0.2s", position: { x: 70, y: 25 } },
        { icon: <Database className="w-4 h-4" />, delay: "0.4s", position: { x: 25, y: 60 } },
        { icon: <Globe className="w-4 h-4" />, delay: "0.6s", position: { x: 75, y: 65 } },
        { icon: <Smartphone className="w-4 h-4" />, delay: "0.8s", position: { x: 50, y: 80 } },
        { icon: <Cpu className="w-4 h-4" />, delay: "1s", position: { x: 15, y: 40 } },
      ],
      specialEffect: "skill-bars",
    },
    projects: {
      title: "Loading Projects",
      subtitle: "Showcasing creations...",
      icon: <FolderOpen className="w-8 h-8" />,
      color: "from-purple-500 to-violet-600",
      bgPattern: "from-purple-500/10 via-violet-500/5 to-pink-500/10",
      messages: [
        "Fetching project repositories...",
        "Loading project screenshots...",
        "Preparing demo links...",
        "Projects ready to showcase!",
      ],
      particles: [
        { icon: <FolderOpen className="w-4 h-4" />, delay: "0s", position: { x: 20, y: 30 } },
        { icon: <GitBranch className="w-4 h-4" />, delay: "0.4s", position: { x: 80, y: 25 } },
        { icon: <Code className="w-4 h-4" />, delay: "0.8s", position: { x: 25, y: 70 } },
        { icon: <Globe className="w-4 h-4" />, delay: "1.2s", position: { x: 75, y: 75 } },
        { icon: <Layers className="w-4 h-4" />, delay: "1.6s", position: { x: 50, y: 15 } },
      ],
      specialEffect: "code-rain",
    },
    contact: {
      title: "Loading Contact",
      subtitle: "Connecting channels...",
      icon: <Mail className="w-8 h-8" />,
      color: "from-primary-orange to-red-500",
      bgPattern: "from-primary-orange/10 via-red-500/5 to-pink-500/10",
      messages: [
        "Establishing connections...",
        "Loading contact methods...",
        "Preparing email service...",
        "Ready to connect!",
      ],
      particles: [
        { icon: <Mail className="w-4 h-4" />, delay: "0s", position: { x: 30, y: 25 } },
        { icon: <User className="w-4 h-4" />, delay: "0.3s", position: { x: 70, y: 30 } },
        { icon: <Globe className="w-4 h-4" />, delay: "0.6s", position: { x: 25, y: 65 } },
        { icon: <Zap className="w-4 h-4" />, delay: "0.9s", position: { x: 75, y: 70 } },
      ],
      specialEffect: "pulse-waves",
    },
  }

  const config = loadingConfigs[type]

  // Special Effects Components
  const MatrixRain = () => {
    if (!isClient) return null

    return (
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-xs font-mono animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </div>
        ))}
      </div>
    )
  }

  const FloatingBubbles = () => {
    if (!isClient) return null

    return (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    )
  }

  const SkillBars = () => {
    if (!isClient) return null

    return (
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded animate-pulse"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${20 + i * 8}%`,
              width: `${30 + Math.random() * 40}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    )
  }

  const CodeRain = () => {
    if (!isClient) return null

    return (
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {["<div>", "</div>", "function()", "const", "return", "import", "export"].map((code, i) => (
          <div
            key={i}
            className="absolute text-purple-400 text-xs font-mono animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            {code}
          </div>
        ))}
      </div>
    )
  }

  const PulseWaves = () => {
    if (!isClient) return null

    return (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-8 bg-orange-400/20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: "2s",
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>
    )
  }

  const renderSpecialEffect = () => {
    switch (config.specialEffect) {
      case "matrix-rain":
        return <MatrixRain />
      case "floating-bubbles":
        return <FloatingBubbles />
      case "skill-bars":
        return <SkillBars />
      case "code-rain":
        return <CodeRain />
      case "pulse-waves":
        return <PulseWaves />
      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${config.bgPattern} animate-pulse`}></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-orange/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Special Effects */}
      {renderSpecialEffect()}

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {config.particles.map((particle, index) => (
          <div
            key={index}
            className="absolute text-gray-600 animate-bounce"
            style={{
              left: `${particle.position.x}%`,
              top: `${particle.position.y}%`,
              animationDelay: particle.delay,
              animationDuration: "3s",
            }}
          >
            {particle.icon}
          </div>
        ))}
      </div>

      <div className="text-center space-y-8 z-10 max-w-md mx-auto px-4">
        {/* Logo with Enhanced Animation */}
        <div className="relative">
          <div className="relative w-24 h-24 mx-auto animate-pulse-slow">
            <Image src="/images/rs-logo-simple.svg" alt="RS Logo" fill className="object-contain" />
          </div>
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-r ${config.color} opacity-20 blur-xl animate-ping`}
          ></div>
          {/* Rotating ring */}
          <div className="absolute inset-0 w-24 h-24 mx-auto">
            <div
              className={`w-full h-full rounded-full border-2 border-transparent bg-gradient-to-r ${config.color} animate-spin`}
              style={{
                background: `conic-gradient(from 0deg, transparent, var(--tw-gradient-stops))`,
                mask: "radial-gradient(circle at center, transparent 70%, black 71%)",
              }}
            ></div>
          </div>
        </div>

        {/* Loading Content */}
        <div className="space-y-6">
          {/* Animated Icon */}
          <div
            className={`inline-flex p-4 rounded-full bg-gradient-to-r ${config.color} text-white animate-bounce shadow-lg`}
          >
            {config.icon}
          </div>

          {/* Title with Typewriter Effect */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white">{config.title}</h2>

          {/* Dynamic Messages */}
          <div className="h-6">
            <p className="text-gray-400 text-sm sm:text-base animate-pulse">{config.messages[currentMessage]}</p>
          </div>

          {/* Enhanced Progress Bar */}
          <div className="space-y-2">
            <div className="w-64 sm:w-80 h-3 bg-gray-800 rounded-full overflow-hidden mx-auto shadow-inner">
              <div
                className={`h-full bg-gradient-to-r ${config.color} transition-all duration-300 ease-out relative`}
                style={{ width: `${progress}%` }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              </div>
            </div>

            {/* Progress Percentage with Animation */}
            <div className="flex justify-between items-center text-xs text-gray-500 px-2">
              <span>Loading...</span>
              <span className="font-mono text-primary-orange">{Math.round(progress)}%</span>
            </div>
          </div>
        </div>

        {/* Enhanced Loading Animation */}
        <div className="flex space-x-2 justify-center">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full bg-gradient-to-r ${config.color} animate-bounce shadow-lg`}
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>

        {/* Page-specific Loading Indicator */}
        <div className="text-xs text-gray-500 font-mono">{type.toUpperCase()} MODULE</div>
      </div>
    </div>
  )
}

export default LoadingScreen
