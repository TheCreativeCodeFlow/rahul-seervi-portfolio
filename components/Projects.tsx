"use client"

import { ExternalLink, Github, Calendar, Tag } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "UNO Game",
      description:
        "A fully functional UNO card game built with Java, featuring multiplayer support, game logic implementation, and an intuitive user interface.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Java", "Swing", "OOP", "Game Logic"],
      liveDemo: "#",
      sourceCode: "#",
      featured: true,
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
      date: "2023",
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-primary-dark-blue/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and projects that demonstrate my skills and passion for development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-1 gap-12 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 ${
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
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <Calendar className="w-4 h-4 text-primary-orange mr-2" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
                  <span className="ml-4 px-3 py-1 bg-primary-orange/10 text-primary-orange text-xs font-medium rounded-full">
                    Featured
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full flex items-center"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveDemo}
                    className="btn-primary flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.sourceCode}
                    className="btn-secondary flex items-center gap-2"
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

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-primary-orange mr-2" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.liveDemo}
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-primary-orange hover:text-white transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.sourceCode}
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-primary-blue hover:text-white transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h4>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More */}
        <div className="text-center mt-12">
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
    </section>
  )
}

export default Projects
