import styled from "@emotion/styled"
import React, { useEffect, useRef } from "react"

export const Scrollbar = () => {
  const trackRef = useRef<HTMLDivElement>(null)
  const shadowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const changeScrollbarHeight = () => {
      if (trackRef.current && shadowRef.current) {
        let scrollbarHeight = document.body.scrollHeight - window.innerHeight
        trackRef.current.style.height = `${(window.scrollY / scrollbarHeight) * 100}%`
        shadowRef.current.style.height = `${(window.scrollY / scrollbarHeight) * 100}%`
      }
    }
    document.addEventListener("scroll", changeScrollbarHeight)
    return () => document.removeEventListener("scroll", changeScrollbarHeight)
  }, [])

  const scrollPage = (event: React.MouseEvent<HTMLDivElement>) => {
    window.scrollTo({
      left: 0,
      top: (event.clientY / window.innerHeight) * document.body.scrollHeight,
      behavior: "smooth",
    })
  }

  return (
    <Wrapper onClick={scrollPage}>
      <Track ref={trackRef} />
      <Shadow ref={shadowRef} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
`
const Track = styled.div`
  position: relative;
  width: 6px;
  height: 0;

  background: var(--color-green);
  border-radius: var(--border-radius-12);
`
const Shadow = styled.div`
  width: 6px;
  height: 0;

  position: absolute;
  left: 0;
  top: 0;

  background: var(--color-green);
  border-radius: var(--border-radius-12);
  filter: blur(6px);
`
