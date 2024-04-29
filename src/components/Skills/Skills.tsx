import styled from "@emotion/styled"

const Skills = () => {
  return (
    <Wrapper>
      <Title>
        <Row>Hello</Row>
        <Row>
          I'm <strong>Palkin Kirill</strong>
        </Row>
        <Row>Front-end Developer</Row>
      </Title>
    </Wrapper>
  )
}

export default Skills

const Wrapper = styled.div`
  height: 200vh;
  position: relative;
  z-index: 1;
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
