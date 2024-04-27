import styled from "@emotion/styled"
import { useEffect, useRef } from "react"

const fontSize = 16

const getPseudoRandomInRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const MatrixBackground = () => {
  const matrixCanvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const matrixCanvas = matrixCanvasRef.current
    if (!matrixCanvas) return

    const context = matrixCanvas.getContext("2d")
    if (!context) return

    matrixCanvas.height = window.innerHeight
    matrixCanvas.width = window.innerWidth

    const columns = matrixCanvas.width / fontSize

    const rainDrops = Array.from<number>({ length: columns }).fill(
      matrixCanvas.height,
    )

    const draw = () => {
      context.fillStyle = "rgba(16, 16, 16, 0.05)"
      context.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height)

      context.fillStyle = "#4bffa5"
      context.font = fontSize + "px monospace"

      for (let i = 0; i < rainDrops.length; i++) {
        const text = String.fromCharCode(getPseudoRandomInRange(33, 126))
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize)

        if (
          rainDrops[i] * fontSize > matrixCanvas.height &&
          Math.random() > 0.975
        ) {
          rainDrops[i] = 0
        }
        rainDrops[i]++
      }
    }

    setInterval(draw, 30)
  }, [])

  return <Canvas ref={matrixCanvasRef} />
}

const Canvas = styled.canvas`
  width: 100vw;
  height: 100vh;
`
