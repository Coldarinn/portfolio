import { useEffect, useRef } from "react"
import gsap from "gsap"
import styled from "@emotion/styled"

export const Cursor = () => {
  const cursorOutlineRef = useRef(null)
  const cursorDotRef = useRef(null)

  useEffect(() => {
    const cursorOutline = cursorOutlineRef.current
    const cursorDot = cursorDotRef.current

    let xCTo = gsap.quickTo(cursorOutline, "x", {
      duration: 0.3,
      ease: "power3",
    })
    let yCTo = gsap.quickTo(cursorOutline, "y", {
      duration: 0.3,
      ease: "power3",
    })
    let xDTo = gsap.quickTo(cursorDot, "x", {
      duration: 0.6,
      ease: "power3",
    })
    let yDTo = gsap.quickTo(cursorDot, "y", {
      duration: 0.6,
      ease: "power3",
    })

    const moveCursor = (event: MouseEvent) => {
      const cursorPosition = {
        left: event.clientX,
        top: event.clientY,
      }

      xCTo(cursorPosition.left)
      yCTo(cursorPosition.top)
      xDTo(cursorPosition.left)
      yDTo(cursorPosition.top)
    }

    document.addEventListener("mousemove", moveCursor)

    return () => {
      document.removeEventListener("mousemove", moveCursor)
    }
  }, [])

  return (
    <>
      <CursorOutline ref={cursorOutlineRef}></CursorOutline>
      <CursorDot ref={cursorDotRef} />
    </>
  )
}

const CursorOutline = styled.div`
  width: 45px;
  height: 45px;

  position: fixed;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
  z-index: 10;

  border-radius: var(--border-radius-circle);
  border: solid 1px var(--color-green);
  mix-blend-mode: difference;
  pointer-events: none;
`
const CursorDot = styled.div`
  width: 10px;
  height: 10px;

  position: fixed;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
  z-index: 10;

  border-radius: var(--border-radius-circle);
  background: var(--color-green);
  mix-blend-mode: difference;
  pointer-events: none;
`
