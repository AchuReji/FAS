import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import Video from "../assets/landing.mp4"

gsap.registerPlugin(TextPlugin)

const texts = [
  "Businesses of All Sizes",
  "Startups",
  "Enterprises",
  "Growing Companies",
]

export default function LandingPage() {
  const headingRef = useRef(null)
  const paraRef = useRef(null)
  const btnRef = useRef(null)
  const bgRef = useRef(null)
  const typingRef = useRef(null)
  const cursorRef = useRef(null)

  // GSAP Entrance Animations
  useEffect(() => {
    gsap.fromTo(
      bgRef.current,
      { scale: 1 },
      {
        scale: 1.12,
        duration: 25,
        ease: "none",
        repeat: -1,
        yoyo: true,
      }
    )

    gsap.from(headingRef.current, {
      y: 70,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    })

    gsap.from(paraRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      ease: "power3.out",
    })

    gsap.from(btnRef.current, {
      scale: 0.85,
      opacity: 0,
      duration: 0.8,
      delay: 0.8,
      ease: "back.out(1.7)",
    })
  }, [])

  // GSAP Typing Animation (Premium)
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 })

    texts.forEach((word) => {
      tl.to(typingRef.current, {
        text: word,
        duration: word.length * 0.09,
        ease: "none",
      })
        .to({}, { duration: 1.2 }) // pause
        .to(typingRef.current, {
          text: "",
          duration: word.length * 0.05,
          ease: "none",
        })
    })

    // Cursor blinking
    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.6,
      ease: "power1.inOut",
    })
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        ref={bgRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={Video} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-3xl px-6 text-white">
          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Banking Solutions <br />
            Built for{" "}
            <span className="text-white font-semibold">
              <span ref={typingRef}></span>
              <span ref={cursorRef} className="ml-1">
                |
              </span>
            </span>
          </h1>

          <p
            ref={paraRef}
            className="mt-6 text-lg text-white max-w-xl"
          >
            From startups to enterprises — manage cash flow, access credit, and
            grow faster with our smart financial tools.
          </p>

          <button
            ref={btnRef}
            className="mt-8 bg-green-500 hover:bg-green-600 transition px-7 py-3 rounded-full font-medium text-black"
          >
            Talk to a Specialist
          </button>
        </div>
      </div>
    </div>
  )
}
