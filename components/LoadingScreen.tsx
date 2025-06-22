"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface LoadingScreenProps {
  onComplete: () => void
  text?: string
}

const LoadingScreen = ({ onComplete, text = "Loading..." }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0)

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

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Logo */}
        <div className="relative w-24 h-24 mx-auto animate-pulse-slow">
          <Image src="/images/rs-logo-simple.svg" alt="RS Logo" fill className="object-contain" />
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">{text}</h2>

          {/* Progress Bar */}
          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-orange to-primary-blue transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Progress Percentage */}
          <p className="text-gray-400 text-sm">{Math.round(progress)}%</p>
        </div>

        {/* Loading Dots */}
        <div className="flex space-x-2 justify-center">
          <div className="w-2 h-2 bg-primary-orange rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary-blue rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div
            className="w-2 h-2 bg-primary-orange rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
