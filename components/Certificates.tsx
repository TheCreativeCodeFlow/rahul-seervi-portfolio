"use client"

import { useState } from "react"
import { Award, Eye, Calendar, Building, CheckCircle, Star } from "lucide-react"
import Image from "next/image"

interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  image: string
  description?: string
  category: string
  featured?: boolean
}

interface CertificatesProps {
  certificates: Certificate[]
  onViewCertificate: (certificate: Certificate) => void
}

const Certificates = ({ certificates, onViewCertificate }: CertificatesProps) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {certificates.map((certificate, index) => (
        <div
          key={certificate.id}
          className="group relative certificate-card bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-slide-in-up"
          style={{
            animationDelay: `${index * 150}ms`
          }}
          onMouseEnter={() => setHoveredCard(certificate.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Featured Badge */}
          {certificate.featured && (
            <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-glow">
              <Star className="w-3 h-3" />
              Featured
            </div>
          )}

          {/* Certificate Image */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={certificate.image}
              alt={certificate.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500 no-select"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Floating Action Button */}
            <div 
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                hoveredCard === certificate.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            >
              <button
                onClick={() => onViewCertificate(certificate)}
                className="p-4 bg-purple-600 hover:bg-purple-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/50 animate-float"
              >
                <Eye className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Shimmer Effect */}
            <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Certificate Info */}
          <div className="p-6 relative">
            {/* Verification Badge */}
            <div className="flex items-center mb-3">
              <div className="flex items-center bg-green-500/20 px-3 py-1 rounded-full">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-sm text-green-400 font-medium">Verified</span>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
              {certificate.title}
            </h3>
            
            {/* Issuer */}
            <div className="flex items-center text-gray-400 mb-2">
              <Building className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="text-sm truncate">{certificate.issuer}</span>
            </div>
            
            {/* Date */}
            <div className="flex items-center text-gray-400 mb-4">
              <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="text-sm">{certificate.date}</span>
            </div>
            
            {/* Description */}
            {certificate.description && (
              <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                {certificate.description}
              </p>
            )}

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>

          {/* Animated Border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 animate-glow"></div>
          
          {/* Corner Accent */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      ))}
    </div>
  )
}

export default Certificates
