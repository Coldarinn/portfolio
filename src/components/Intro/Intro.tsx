import styled from "@emotion/styled"
import { Animation } from "./Animation"
import { Background } from "./Background"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import { useRef } from "react"
import gsap from "gsap"

const Intro = () => {
  const { typingRef } = useTypingText([
    "code cool websites",
    "love React",
    "develop mobile apps",
  ])
  const { wrapperRef } = useParallax()

  return (
    <Wrapper ref={wrapperRef}>
      <Title className="title">
        <Row>Hello</Row>
        <Row>
          I'm <strong>Palkin Kirill</strong>
        </Row>
        <Row>Front-end Developer</Row>
      </Title>

      <Typing className="text">
        I <strong ref={typingRef} className="text"></strong>
      </Typing>

      <Animation />
      <Background />
    </Wrapper>
  )
}
export default Intro

const useTypingText = (texts: string[] = []) => {
  const typingRef = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(TextPlugin)

    const textElement = typingRef.current
    let currentTextIndex = 0

    const animateText = () => {
      const currentText = texts[currentTextIndex]

      gsap.fromTo(
        textElement,
        { text: "" },
        {
          duration: 2,
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
        duration: 2,
        delay: 1,
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
  }, [texts])

  return { typingRef }
}
const useParallax = () => {
  const wrapperRef = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const timeline = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "bottom bottom",
        end: "+=100%",
        scrub: true,
      },
    })
    timeline
      .to(wrapperRef.current, {
        opacity: "0",
      })
      .to(
        ".title",
        {
          y: "-=45vh",
          x: "-=300px",
        },
        0,
      )
      .to(
        ".text",
        {
          y: "-=70vh",
          x: "+=300px",
        },
        0,
      )
      .to(
        ".background",
        {
          y: "-=30vh",
          scale: 0.6,
        },
        0,
      )
  }, [])

  return { wrapperRef }
}

const Wrapper = styled.div`
  height: 100vh;
  min-height: 900px;
  padding: var(--gap-32);

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  overflow: hidden;
  position: sticky;
  top: 0;
`
const Title = styled.h1`
  margin: 0;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  font-size: 110px;
`
const Row = styled.p`
  margin: 0;
  strong {
    color: var(--color-green);
    text-shadow: 0 0 7px var(--color-green);
  }
`
const Typing = styled.p`
  margin: 0;

  position: absolute;
  bottom: 100px;
  right: 200px;

  white-space: nowrap;
  font-size: 60px;
  strong {
    color: var(--color-green);
    text-shadow: 0 0 2px var(--color-green);
  }
`
