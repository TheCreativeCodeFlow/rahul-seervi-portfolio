"use client"

import { useState } from "react"
import { Github, Calendar, Tag, Filter, ExternalLink } from "lucide-react"
import LoadingScreen from "@/components/LoadingScreens"

export default function Projects() {
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      title: "UNO Game",
      description:
        "A fully functional UNO card game built with Java, featuring multiplayer support, game logic implementation, and an intuitive user interface.",
      image: "/images/uno-game-thumbnail.png",
      technologies: ["Java", "Swing", "OOP", "Game Logic"],
      liveDemo: "https://uno-game-app-3w67.vercel.app/",
      sourceCode: "https://github.com/TheCreativeCodeFlow/Uno-Game-App",
      featured: true,
      category: "game",
      date: "2024",
    },
    {
      title: "AI Chatbot with JSON Training",
      description:
        "An intelligent chatbot system that learns from JSON-based training data, providing contextual responses and natural language processing capabilities.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["JavaScript", "JSON", "NLP", "AI/ML"],
      liveDemo: "#",
      sourceCode: "#",
      featured: true,
      category: "ai",
      date: "2024",
    },
    {
      title: "Traffic Video Analysis System",
      description:
        "A sophisticated web application for analyzing traffic patterns using video processing, built with Next.js and Canvas API for real-time visualization.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "Canvas API", "Video Processing", "React"],
      liveDemo: "#",
      sourceCode: "#",
      featured: true,
      category: "web",
      date: "2024",
    },
    {
      title: "University Management System",
      description:
        "A comprehensive web application for managing university operations including student enrollment, course management, and administrative tasks.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveDemo: "#",
      sourceCode: "#",
      featured: false,
      category: "web",
      date: "2023",
    },
    {
      title: "Data Analytics Dashboard",
      description:
        "An interactive dashboard for visualizing complex datasets with charts, graphs, and real-time data processing capabilities.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "D3.js", "Python", "Data Visualization"],
      liveDemo: "#",
      sourceCode: "#",
      featured: false,
      category: "analytics",
      date: "2023",
    },
    {
      title: "Mobile Weather App",
      description:
        "A responsive weather application built with Kotlin for Android, featuring real-time weather data and location-based forecasts.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Kotlin", "Android", "API Integration", "Material Design"],
      liveDemo: "#",
      sourceCode: "#",
      featured: false,
      category: "mobile",
      date: "2023",
    },
  ]

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Apps" },
    { id: "ai", name: "AI/ML" },
    { id: "game", name: "Games" },
    { id: "mobile", name: "Mobile" },
    { id: "analytics", name: "Analytics" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)
  const featuredProjects = filteredProjects.filter((project) => project.featured)
  const otherProjects = filteredProjects.filter((project) => !project.featured)

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} type="projects" />
  }

  return (
    <div className="min-h-screen bg-black text-white page-transition">
      <div className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              A showcase of my recent work and projects that demonstrate my skills and passion for development.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
            <div className="flex items-center text-gray-400 mb-2 sm:mb-0 w-full sm:w-auto justify-center sm:justify-start">
              <Filter className="w-4 h-4 mr-2" />
              <span className="text-sm">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                  filter === category.id
                    ? "bg-primary-orange text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 px-4 sm:px-0">Featured Projects</h2>
              <div className="space-y-8 sm:space-y-12">
                {featuredProjects.map((project, index) => (
                  <div
                    key={index}
                    className={`group rounded-2xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } lg:flex`}
                  >
                    {/* Project Image */}
                    <div className="lg:w-1/2 relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Project Content */}
                    <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
                      <div className="flex items-center mb-4">
                        <Calendar className="w-4 h-4 text-primary-orange mr-2" />
                        <span className="text-sm text-gray-400">{project.date}</span>
                        <span className="ml-4 px-3 py-1 bg-primary-orange/10 text-primary-orange text-xs font-medium rounded-full">
                          Featured
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{project.title}</h3>

                      <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">{project.description}</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-800 text-gray-300 text-xs sm:text-sm rounded-full flex items-center"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <a
                          href={project.liveDemo}
                          className="btn-primary flex items-center justify-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                        <a
                          href={project.sourceCode}
                          className="btn-secondary flex items-center justify-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 px-4 sm:px-0">Other Projects</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
                {otherProjects.map((project, index) => (
                  <div
                    key={index}
                    className="group p-4 sm:p-6 rounded-xl bg-gray-900 hover:bg-gray-800 transition-all duration-300 card-hover"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-primary-orange mr-2" />
                        <span className="text-sm text-gray-400">{project.date}</span>
                      </div>
                      <div className="flex justify-center space-x-2">
                        <a
                          href={project.liveDemo}
                          className="p-2 rounded-lg bg-gray-800 hover:bg-primary-orange hover:text-white transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <a
                          href={project.sourceCode}
                          className="p-2 rounded-lg bg-gray-800 hover:bg-primary-blue hover:text-white transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-white mb-3">{project.title}</h4>

                    <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No projects found in this category.</p>
            </div>
          )}

          {/* View More */}
          <div className="text-center mt-12 sm:mt-16">
            <a
              href="https://github.com/TheCreativeCodeFlow"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
