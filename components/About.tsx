"use client"

import { GraduationCap, Code, Database, Brain } from "lucide-react"

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education",
      description: "B.Tech in Computer Science Engineering with specialization in Big Data Analytics",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Development",
      description: "Full-stack development with Java, React, and modern web technologies",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Passionate about extracting insights from complex datasets",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Love tackling challenging problems with innovative solutions",
    },
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-primary-dark-blue/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey, passion, and what drives me in the world of technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary-orange to-primary-blue p-1">
                <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary-blue">RS</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-orange/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-blue/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Hello! I'm Rahul Seervi, a passionate B.Tech Computer Science Engineering student specializing in Big
                Data Analytics. My journey in technology began with a curiosity about how data can transform
                decision-making and create meaningful impact.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I have hands-on experience in developing applications using Java, React, and various database
                technologies. My projects range from interactive games like UNO to sophisticated systems like Traffic
                Video Analysis using Next.js and Canvas API.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                diving deep into the latest trends in big data and analytics.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-primary-orange mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
