"use client"

import { useEffect } from "react"
import { X, Award, Calendar, Building, ExternalLink, Download } from "lucide-react"
import Image from "next/image"

interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  image: string
  description?: string
  category: string
  credentialUrl?: string
}

interface CertificateModalProps {
  certificate: Certificate | null
  onClose: () => void
}

const CertificateModal = ({ certificate, onClose }: CertificateModalProps) => {
  useEffect(() => {
    if (certificate) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [certificate])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (certificate) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [certificate, onClose])

  if (!certificate) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleImageRightClick = (e: React.MouseEvent) => {
    e.preventDefault()
    return false
  }

  const handleImageDrag = (e: React.DragEvent) => {
    e.preventDefault()
    return false
  }

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-zoom-in"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-5xl w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-purple-500/20">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 border-b border-gray-700">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-600/20 rounded-full">
              <Award className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{certificate.title}</h2>
              <div className="flex flex-wrap items-center gap-4 text-gray-300">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  <span>{certificate.issuer}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{certificate.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Image */}
        <div className="relative bg-white">
          <div className="relative h-96 md:h-[600px] certificate-modal overflow-hidden">
            <Image
              src={certificate.image}
              alt={certificate.title}
              fill
              className="object-contain no-select"
              style={{ 
                userSelect: 'none', 
                pointerEvents: 'none',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none'
              }}
              onContextMenu={handleImageRightClick}
              onDragStart={handleImageDrag}
              draggable={false}
              priority
            />
            
            {/* Watermark Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
                Portfolio Preview
              </div>
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
                © Rahul Seervi
              </div>
            </div>

            {/* Invisible overlay to prevent interactions */}
            <div 
              className="absolute inset-0 z-10"
              onContextMenu={handleImageRightClick}
              onDragStart={handleImageDrag}
              style={{ cursor: 'default' }}
            ></div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700">
          {certificate.description && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white mb-2">About this Certificate</h3>
              <p className="text-gray-300 leading-relaxed">{certificate.description}</p>
            </div>
          )}
          
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Verified Certificate</span>
            </div>
            
            {certificate.credentialUrl && (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                View Credential
              </a>
            )}
          </div>
        </div>

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-20 animate-glow pointer-events-none"></div>
      </div>

      {/* Keyboard Shortcut Hint */}
      <div className="absolute bottom-4 left-4 text-gray-400 text-sm">
        Press <kbd className="px-2 py-1 bg-gray-800 rounded text-xs">ESC</kbd> to close
      </div>
    </div>
  )
}

export default CertificateModal
