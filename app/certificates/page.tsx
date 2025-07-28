"use client"

import { useState, useRef } from "react"
import { Upload, Award, Plus, Trash2, Filter } from "lucide-react"
import LoadingScreen from "@/components/LoadingScreens"
import Certificates from "@/components/Certificates"
import CertificateModal from "@/components/CertificateModal"

interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  image: string
  description?: string
  category: string
  featured?: boolean
  credentialUrl?: string
}

export default function Certificates() {
  const [loading, setLoading] = useState(true)
  const [certificates, setCertificates] = useState<Certificate[]>([
    {
      id: "1",
      title: "Full Stack Web Development Certification",
      issuer: "FreeCodeCamp",
      date: "2024",
      image: "/placeholder.svg?height=400&width=600",
      description: "Comprehensive course covering HTML, CSS, JavaScript, React, Node.js, and MongoDB. Completed 300+ hours of coursework including responsive web design, algorithms and data structures, front-end libraries, and back-end development.",
      category: "web",
      featured: true,
      credentialUrl: "https://freecodecamp.org/certification/example"
    },
    {
      id: "2",
      title: "Machine Learning Specialization",
      issuer: "Coursera - Stanford University",
      date: "2024",
      image: "/placeholder.svg?height=400&width=600",
      description: "Advanced machine learning algorithms and practical implementation using Python, TensorFlow, and scikit-learn. Covered supervised learning, unsupervised learning, and neural networks.",
      category: "ai",
      featured: true,
      credentialUrl: "https://coursera.org/verify/example"
    },
    {
      id: "3",
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "/placeholder.svg?height=400&width=600",
      description: "Cloud computing fundamentals and AWS services including EC2, S3, RDS, and Lambda. Understanding of cloud architecture and security best practices.",
      category: "cloud",
      credentialUrl: "https://aws.amazon.com/verification/example"
    },
    {
      id: "4",
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google via Coursera",
      date: "2023",
      image: "/placeholder.svg?height=400&width=600",
      description: "Comprehensive data analytics program covering data cleaning, analysis, and visualization using SQL, R, and Tableau.",
      category: "data",
      featured: false
    },
    {
      id: "5",
      title: "React Developer Certification",
      issuer: "Meta via Coursera",
      date: "2024",
      image: "/placeholder.svg?height=400&width=600",
      description: "Advanced React development including hooks, context, state management, and modern React patterns.",
      category: "web",
      featured: false
    }
  ])
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)
  const [filter, setFilter] = useState("all")
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const categories = [
    { id: "all", name: "All Certificates", color: "from-purple-500 to-pink-500" },
    { id: "web", name: "Web Development", color: "from-blue-500 to-cyan-500" },
    { id: "ai", name: "AI/ML", color: "from-green-500 to-emerald-500" },
    { id: "cloud", name: "Cloud Computing", color: "from-orange-500 to-red-500" },
    { id: "data", name: "Data Science", color: "from-indigo-500 to-purple-500" }
  ]

  const filteredCertificates = filter === "all" 
    ? certificates 
    : certificates.filter(cert => cert.category === filter)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setIsUploading(true)
      // Simulate upload process
      setTimeout(() => {
        const reader = new FileReader()
        reader.onload = (e) => {
          const newCertificate: Certificate = {
            id: Date.now().toString(),
            title: "New Certificate",
            issuer: "Institution Name",
            date: new Date().getFullYear().toString(),
            image: e.target?.result as string,
            description: "Add description here",
            category: "web"
          }
          setCertificates(prev => [...prev, newCertificate])
          setIsUploading(false)
        }
        reader.readAsDataURL(file)
      }, 2000)
    }
  }

  const deleteCertificate = (id: string) => {
    setCertificates(prev => prev.filter(cert => cert.id !== id))
  }

  // Loading screen
  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />
  }

  return (
    <div className="min-h-screen bg-black text-white page-transition">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 animate-pulse-slow">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <Award className="w-10 h-10 text-purple-400" />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Certificates</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              A collection of my professional certifications and achievements that showcase my continuous learning journey and expertise in various technologies.
            </p>

            {/* Upload Button */}
            <div className="flex justify-center mb-8">
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className="btn-primary flex items-center gap-2 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-2">
                  {isUploading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      Add Certificate
                    </>
                  )}
                </div>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-500 transform hover:scale-105 ${
                  filter === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Certificates Grid */}
          <Certificates
            certificates={filteredCertificates}
            onViewCertificate={setSelectedCertificate}
          />

          {/* Empty State */}
          {filteredCertificates.length === 0 && (
            <div className="text-center py-16">
              <Award className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No certificates found</h3>
              <p className="text-gray-500">Upload your first certificate to get started!</p>
            </div>
          )}
        </div>
      </section>

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </div>
  )
}
