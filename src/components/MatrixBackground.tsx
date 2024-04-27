import styled from "@emotion/styled"
import { useCallback, useEffect, useRef, type ElementRef } from "react"

const TEXT_COLOR = "#4bffa5"
const BACKGROUND_COLOR = "#101010"
const ALPHA_BACKGROUND_COLOR = "#10101018"
const FONT = "15pt monospace"
const TEXT_COLUMN_WIDTH = 20
const FPS = 20

function getPseudoRandomInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const MatrixBackground = () => {
  const matrixCanvasRef = useRef<ElementRef<"canvas">>(null)

  const initializeMatrixCanvas = useCallback(() => {
    if (!matrixCanvasRef.current) return
    const canvas = matrixCanvasRef.current

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const canvasContext = canvas.getContext("2d")
    if (!canvasContext) return

    canvasContext.fillStyle = BACKGROUND_COLOR
    canvasContext.fillRect(0, 0, canvas.width, canvas.height)

    const numberOfColumns = Math.floor(canvas.width / TEXT_COLUMN_WIDTH) + 1
    const defaultYPositions = Array<number>(numberOfColumns).fill(0)

    return defaultYPositions
  }, [])

  const drawMatrix = useCallback((yPositions: number[]) => {
    if (!matrixCanvasRef.current) return
    const canvas = matrixCanvasRef.current

    const canvasContext = canvas.getContext("2d")

    if (!canvasContext) return undefined

    canvasContext.fillStyle = ALPHA_BACKGROUND_COLOR
    canvasContext.fillRect(0, 0, canvas.width, canvas.height)

    canvasContext.fillStyle = TEXT_COLOR
    canvasContext.font = FONT

    const newYPositions = yPositions.map((y, index) => {
      const char = String.fromCharCode(getPseudoRandomInRange(33, 126))
      const x = index * TEXT_COLUMN_WIDTH

      canvasContext.fillText(char, x, y)

      const shouldResetYPosition = y > 100 + Math.random() * 10000
      return shouldResetYPosition ? 0 : y + 20
    })

    return newYPositions
  }, [])

  useEffect(() => {
    let timeout = 0
    const animate = (yPositions: number[]) => {
      const newYPositions = drawMatrix(yPositions)

      if (!newYPositions) return

      timeout = setTimeout(() => {
        animate(newYPositions)
      }, 1000 / FPS)
    }

    const changeViewportSize = () => {
      const defaultYPositions = initializeMatrixCanvas()
      if (defaultYPositions) animate(defaultYPositions)
    }

    const defaultYPositions = initializeMatrixCanvas()
    if (defaultYPositions) animate(defaultYPositions)

    window.addEventListener("resize", changeViewportSize)
    window.addEventListener("orientationchange", changeViewportSize)

    return () => {
      clearTimeout(timeout)
      window.removeEventListener("resize", changeViewportSize)
      window.removeEventListener("orientationchange", changeViewportSize)
    }
  }, [])

  return <Canvas ref={matrixCanvasRef} />
}

const Canvas = styled.canvas`
  width: 100vw;
  height: 100vh;

  mask-image: radial-gradient(
    circle at center center,
    #101010,
    transparent 75%
  );
  border-top: 1px solid var(--color-animation-line);
`
