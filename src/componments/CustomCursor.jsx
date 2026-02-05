import { useEffect, useRef } from "react"

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const moveMouse = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    window.addEventListener("mousemove", moveMouse)

    const animate = () => {
      // Smooth follow (LERP)
      ring.current.x += (mouse.current.x - ring.current.x) * 0.15
      ring.current.y += (mouse.current.y - ring.current.y) * 0.15

      // Dot (instant)
      dotRef.current.style.transform = `translate3d(${mouse.current.x - 4}px, ${mouse.current.y - 4}px, 0)`

      // Ring (smooth)
      ringRef.current.style.transform = `translate3d(${ring.current.x - 20}px, ${ring.current.y - 20}px, 0)`

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("mousemove", moveMouse)
    }
  }, [])

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-10 w-10 rounded-full border border-black"
      />

      {/* Center Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-[#222F44]"
      />
    </>
  )
}

