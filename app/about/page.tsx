"use client"

import { useState } from "react"
import Image from "next/image"
import { GraduationCap, Code, Database, Brain, Calendar, MapPin, Award } from "lucide-react"
import LoadingScreen from "@/components/LoadingScreens"

export default function About() {
  const [loading, setLoading] = useState(true)

  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Education",
      description: "B.Tech in Computer Science Engineering with specialization in Big Data Analytics",
    },
    {
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Development",
      description: "Full-stack development with Java, React, and modern web technologies",
    },
    {
      icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Data Analytics",
      description: "Passionate about extracting insights from complex datasets",
    },
    {
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Problem Solving",
      description: "Love tackling challenging problems with innovative solutions",
    },
  ]

  const timeline = [
    {
      year: "2024",
      title: "Advanced Projects",
      description: "Developed Traffic Video Analysis System and AI Chatbot",
      icon: <Award className="w-5 h-5" />,
    },
    {
      year: "2023",
      title: "Core Development",
      description: "Built UNO Game and University Management System",
      icon: <Code className="w-5 h-5" />,
    },
    {
      year: "2022",
      title: "Started Journey",
      description: "Began B.Tech CSE with Big Data Analytics specialization",
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ]

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} type="about" />
  }

  return (
    <div className="min-h-screen bg-black text-white page-transition">
      <div className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Get to know more about my journey, passion, and what drives me in the world of technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-primary-orange to-primary-blue p-1">
                  <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                    <Image
                      src="/images/rs-logo-simple.svg"
                      alt="RS Logo"
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-primary-orange/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-32 sm:h-32 bg-primary-blue/20 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 px-4 lg:px-0">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  Hello! I'm Rahul Seervi, a passionate B.Tech Computer Science Engineering student specializing in Big
                  Data Analytics. My journey in technology began with a curiosity about how data can transform
                  decision-making and create meaningful impact.
                </p>

                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  I have hands-on experience in developing applications using Java, React, and various database
                  technologies. My projects range from interactive games like UNO to sophisticated systems like Traffic
                  Video Analysis using Next.js and Canvas API.
                </p>

                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  or diving deep into the latest trends in big data and analytics.
                </p>
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary-orange" />
                  <span className="text-gray-300">Age: 21</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-orange" />
                  <span className="text-gray-300">Location: India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300 card-hover"
              >
                <div className="text-primary-orange mb-3">{item.icon}</div>
                <h3 className="font-semibold text-white mb-2 text-base sm:text-lg">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">My Journey</h2>
            <div className="space-y-6 sm:space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 sm:space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-primary-orange to-primary-blue flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-lg sm:text-xl font-semibold text-white">{item.title}</h3>
                      <span className="text-primary-orange font-medium text-sm sm:text-base">{item.year}</span>
                    </div>
                    <p className="text-gray-400 text-sm sm:text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
