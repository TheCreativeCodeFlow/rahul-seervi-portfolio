"use client"

import { Code, Database, Globe, Smartphone, Terminal, Wrench } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      color: "from-primary-orange to-red-500",
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <Code className="w-6 h-6" />,
      color: "from-primary-blue to-blue-600",
      skills: ["Java", "Node.js", "REST APIs", "Express.js"],
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
      skills: ["MongoDB", "MySQL", "SQL", "Database Design"],
    },
    {
      title: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-purple-500 to-violet-600",
      skills: ["Kotlin", "Android Development"],
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-orange-500 to-yellow-500",
      skills: ["Git", "GitHub", "VSCode", "IntelliJ IDEA", "Canvas API", "JSON"],
    },
    {
      title: "Specialization",
      icon: <Terminal className="w-6 h-6" />,
      color: "from-primary-dark-blue to-gray-800",
      skills: ["Big Data Analytics", "Data Processing", "Algorithm Design", "Problem Solving"],
    },
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                    <div className="w-2 h-2 rounded-full bg-primary-orange"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary-orange to-primary-blue text-white font-medium">
            <Terminal className="w-5 h-5 mr-2" />
            Always learning and exploring new technologies
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
