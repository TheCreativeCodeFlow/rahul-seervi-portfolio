"use client"

import React, { useEffect, useState } from 'react'

interface CursorPosition {
  x: number
  y: number
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
      setIsVisible(true)
    }

    const mouseLeave = () => {
      setIsVisible(false)
    }

    const mouseEnter = () => {
      setIsVisible(true)
    }

    // Add event listeners for interactive elements
    const addHoverListeners = () => {
      // Buttons and links
      const interactiveElements = document.querySelectorAll(
        'button, a, [role="button"], .btn-primary, .btn-secondary'
      )

      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setCursorVariant('hover'))
        el.addEventListener('mouseleave', () => setCursorVariant('default'))
      })

      // Form elements
      const formElements = document.querySelectorAll('input, textarea, select')
      formElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setCursorVariant('input'))
        el.addEventListener('mouseleave', () => setCursorVariant('default'))
      })

      // Social links and special elements
      const socialElements = document.querySelectorAll('[href*="github"], [href*="linkedin"], [href*="twitter"]')
      socialElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setCursorVariant('social'))
        el.addEventListener('mouseleave', () => setCursorVariant('default'))
      })

      // Project cards and interactive cards
      const cardElements = document.querySelectorAll('.project-card, .skill-card, .card')
      cardElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setCursorVariant('card'))
        el.addEventListener('mouseleave', () => setCursorVariant('default'))
      })
    }

    // Initial setup
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseleave', mouseLeave)
    document.addEventListener('mouseenter', mouseEnter)
    
    // Add listeners after a short delay to ensure DOM is ready
    setTimeout(addHoverListeners, 100)

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', mouseMove)
      document.removeEventListener('mouseleave', mouseLeave)
      document.removeEventListener('mouseenter', mouseEnter)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: 'rgba(255, 101, 0, 0.8)',
      mixBlendMode: 'difference' as const,
      borderRadius: '50%',
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      backgroundColor: 'rgba(30, 62, 98, 0.9)',
      mixBlendMode: 'difference' as const,
      borderRadius: '50%',
    },
    input: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 12,
      scale: 1,
      backgroundColor: 'rgba(255, 101, 0, 0.9)',
      mixBlendMode: 'difference' as const,
      borderRadius: '2px',
      width: '4px',
      height: '24px',
    },
    social: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.3,
      backgroundColor: 'rgba(0, 255, 150, 0.8)',
      mixBlendMode: 'difference' as const,
      borderRadius: '50%',
    },
    card: {
      x: mousePosition.x - 18,
      y: mousePosition.y - 18,
      scale: 1.2,
      backgroundColor: 'rgba(255, 101, 0, 0.7)',
      mixBlendMode: 'difference' as const,
      borderRadius: '50%',
    }
  }

  const currentVariant = variants[cursorVariant as keyof typeof variants] || variants.default

  return (
    <>
      {/* Main cursor */}
      <div
        className="custom-cursor"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: currentVariant.width || '32px',
          height: currentVariant.height || '32px',
          backgroundColor: currentVariant.backgroundColor,
          borderRadius: currentVariant.borderRadius || '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate3d(${currentVariant.x}px, ${currentVariant.y}px, 0) scale(${currentVariant.scale})`,
          transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          mixBlendMode: currentVariant.mixBlendMode,
          opacity: isVisible ? 1 : 0,
        }}
      />
      
      {/* Cursor trail */}
      <div
        className="cursor-trail"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '12px',
          height: '12px',
          backgroundColor: cursorVariant === 'social' ? 'rgba(0, 255, 150, 0.3)' : 'rgba(255, 101, 0, 0.4)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: `translate3d(${mousePosition.x - 6}px, ${mousePosition.y - 6}px, 0)`,
          transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.2s ease-out',
          opacity: isVisible && cursorVariant !== 'input' ? 0.8 : 0,
        }}
      />

      {/* Additional trail particles for special effects */}
      {(cursorVariant === 'hover' || cursorVariant === 'social') && (
        <>
          <div
            className="cursor-particle"
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              width: '6px',
              height: '6px',
              backgroundColor: cursorVariant === 'social' ? 'rgba(0, 255, 150, 0.2)' : 'rgba(30, 62, 98, 0.3)',
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 9997,
              transform: `translate3d(${mousePosition.x - 3}px, ${mousePosition.y - 3}px, 0)`,
              transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              opacity: isVisible ? 0.6 : 0,
            }}
          />
          <div
            className="cursor-particle-2"
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              width: '4px',
              height: '4px',
              backgroundColor: cursorVariant === 'social' ? 'rgba(0, 255, 150, 0.1)' : 'rgba(30, 62, 98, 0.2)',
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 9996,
              transform: `translate3d(${mousePosition.x - 2}px, ${mousePosition.y - 2}px, 0)`,
              transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              opacity: isVisible ? 0.4 : 0,
            }}
          />
        </>
      )}
    </>
  )
}
