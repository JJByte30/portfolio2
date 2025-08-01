"use client"

import { useEffect, useRef } from "react"

export default function BackgroundInterativo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return;
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particles: any[] = []

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
      originalX: number
      originalY: number

      constructor(x?: number, y?: number) {
        this.x = x ?? Math.random() * canvas.width
        this.y = y ?? Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 3 + 1
        this.opacity = Math.random() * 0.8 + 0.2
        this.originalX = this.x
        this.originalY = this.y
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = "white"
        ctx.fill()

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(210, 210, 210, 0.1)"
        ctx.fill()
        ctx.restore()
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const particleCount = Math.min(80, Math.floor(canvas.width * canvas.height / 15000))
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const opacity = (120 - distance) / 120 * 0.3
            ctx.save()
            ctx.globalAlpha = opacity
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = "white"
            ctx.stroke()
            ctx.restore()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.update()
        p.draw()
      })
      drawConnections()
      requestAnimationFrame(animate)
    }

    const handleClick = (e: MouseEvent) => {
      particles.push(new Particle(e.clientX, e.clientY))
    }

    window.addEventListener("resize", resizeCanvas)
    canvas.addEventListener("click", handleClick)

    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <div className="">
      <canvas ref={canvasRef} className="fixed top-26 left-0 w-full h-full -z-10 bg-gradient-to-br from-black via-[#120f19] to-black" />
    </div>
  )
}
