import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import TextPlugin from "gsap/TextPlugin"

export const useTypingText = (texts: string[] = [], duration = 2) => {
  gsap.registerPlugin(TextPlugin)
  const textRef = useRef(null)

  useGSAP(() => {
    const textElement = textRef.current
    let currentTextIndex = 0

    const animateText = () => {
      const currentText = texts[currentTextIndex]

      gsap.fromTo(
        textElement,
        { text: "" },
        {
          duration,
          ease: "none",
          onComplete: eraseText,
          text: {
            value: currentText,
          },
        },
      )
    }

    const eraseText = () => {
      gsap.to(textElement, {
        onComplete: nextText,
        duration,
        delay: 3,
        ease: "none",
        text: {
          value: "",
          rtl: true,
        },
      })
    }

    const nextText = () => {
      currentTextIndex = (currentTextIndex + 1) % texts.length
      animateText()
    }

    animateText()
  }, [texts, duration])

  return textRef
}
