"use client"

import { useState } from "react"
import { Code, Database, Globe, Smartphone, Terminal, Wrench, Star } from "lucide-react"
import LoadingScreen from "@/components/LoadingScreens"

export default function Skills() {
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState(0)

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      color: "from-primary-orange to-red-500",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "TypeScript", level: 80 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind CSS", level: 92 },
      ],
    },
    {
      title: "Backend",
      icon: <Code className="w-6 h-6" />,
      color: "from-primary-blue to-blue-600",
      skills: [
        { name: "Java", level: 92 },
        { name: "Node.js", level: 78 },
        { name: "REST APIs", level: 85 },
        { name: "Express.js", level: 75 },
      ],
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "SQL", level: 90 },
        { name: "Database Design", level: 82 },
      ],
    },
    {
      title: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-purple-500 to-violet-600",
      skills: [
        { name: "Kotlin", level: 80 },
        { name: "Android Development", level: 75 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-orange-500 to-yellow-500",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 88 },
        { name: "VSCode", level: 95 },
        { name: "IntelliJ IDEA", level: 85 },
        { name: "Canvas API", level: 78 },
        { name: "JSON", level: 92 },
      ],
    },
    {
      title: "Specialization",
      icon: <Terminal className="w-6 h-6" />,
      color: "from-gray-600 to-gray-800",
      skills: [
        { name: "Big Data Analytics", level: 82 },
        { name: "Data Processing", level: 80 },
        { name: "Algorithm Design", level: 85 },
        { name: "Problem Solving", level: 90 },
      ],
    },
  ]

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} type="skills" />
  }

  return (
    <div className="min-h-screen bg-black text-white page-transition">
      <div className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              A comprehensive overview of my technical expertise and the technologies I work with.
            </p>
          </div>

          {/* Category Tabs - Mobile Friendly */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center space-x-2 px-3 py-2 sm:px-4 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                  activeCategory === index
                    ? "bg-primary-orange text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.icon}
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">{category.title.slice(0, 4)}</span>
              </button>
            ))}
          </div>

          {/* Active Category Skills */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center mb-6 sm:mb-8">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${skillCategories[activeCategory].color} text-white mr-4`}
                >
                  {skillCategories[activeCategory].icon}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">{skillCategories[activeCategory].title}</h2>
              </div>

              <div className="grid gap-4 sm:gap-6">
                {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium text-sm sm:text-base">{skill.name}</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-primary-orange text-sm sm:text-base">{skill.level}%</span>
                        <Star className="w-4 h-4 text-primary-orange fill-current" />
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3">
                      <div
                        className={`bg-gradient-to-r ${skillCategories[activeCategory].color} h-full rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* All Skills Overview - Desktop Only */}
          <div className="hidden lg:block mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">Complete Skill Set</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-gray-900 hover:bg-gray-800 transition-all duration-300 card-hover"
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center justify-between p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                      >
                        <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                        <div className="flex items-center space-x-1">
                          <span className="text-primary-orange text-sm">{skill.level}%</span>
                          <div className="w-2 h-2 rounded-full bg-primary-orange"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex items-center px-4 py-3 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-primary-orange to-primary-blue text-white font-medium text-sm sm:text-base">
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Always learning and exploring new technologies
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
