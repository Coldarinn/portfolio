import styled from "@emotion/styled"
import { useEffect, useState } from "react"

export const Animation = () => {
  const [isFinish, setIsFinish] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsFinish(true), 500)
  }, [])

  return (
    <Wrapper>
      <Col className={isFinish ? "finish" : ""} />
      <Col className={isFinish ? "finish" : ""} />
      <Col className={isFinish ? "finish" : ""} />
      <Col className={isFinish ? "finish" : ""} />
      <Col className={isFinish ? "finish" : ""} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;

  font-size: 0;
  pointer-events: none;
`
const Col = styled.div`
  width: 20%;
  height: 100vh;

  position: relative;
  display: inline-block;

  &.finish {
    &::before {
      height: 100%;
    }
    &::after {
      height: 0%;
    }
  }

  &:first-child {
    &::before {
      background: transparent;
      transition-delay: 2.5s;
    }
    &::after {
      left: auto;
      right: 0;
      width: 1000%;
      top: 0;
      bottom: auto;
      transition-delay: 0.9s;
    }
  }

  &:last-child {
    &::before {
      transition-delay: 2.6s;
    }
    &::after {
      left: 0;
      right: auto;
      width: 1000%;
      top: 0;
      bottom: auto;
      transition-delay: 1s;
    }
  }

  &:nth-child(2) {
    &::before {
      transition-delay: 2.3s;
    }
    &:after {
      top: auto;
      bottom: 0;
      transition-delay: 0.7s;
    }
  }

  &:nth-child(3) {
    &::before {
      transition-delay: 1.8s;
    }
    &::after {
      top: 0;
      bottom: auto;

      transition-delay: 0.2s;
    }
  }

  &:nth-child(4) {
    &::before {
      transition-delay: 2.1s;
    }
    &::after {
      top: auto;
      bottom: 0;

      transition-delay: 0.5s;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;

    width: 1px;
    height: 0;

    background: var(--color-animation-line);
    transition: 1s cubic-bezier(0.165, 0.85, 0.45, 1);
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;

    background: var(--color-grey);
    z-index: 1;

    transition: 1s cubic-bezier(0.165, 0.85, 0.45, 1);
  }
`
