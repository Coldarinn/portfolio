import styled from "@emotion/styled"
import { useTypingText } from "@/modules/utils/useTypingText"
import { Animation } from "./Animation"
import { Background } from "./Background"

const Intro = () => {
  const { word } = useTypingText({
    words: ["code cool websites", "love React", "develop mobile apps"],
    keySpeed: 150,
    maxPauseAmount: 10,
  })

  return (
    <Wrapper>
      <Title>
        <Row>Hello</Row>
        <Row>
          I'm <strong>Palkin Kirill</strong>
        </Row>
        <Row>Front-end Developer</Row>
      </Title>

      <Typing>
        I <strong>{word}</strong>
      </Typing>

      <Animation />
      <Background />
    </Wrapper>
  )
}

export default Intro

const Wrapper = styled.div`
  height: 100vh;
  min-height: 900px;
  padding: var(--gap-32);

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  overflow: hidden;
  position: relative;
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
