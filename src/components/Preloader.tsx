import styled from "@emotion/styled"

export const Preloader = () => {
  return (
    <Wrapper>
      <Spinner>
        <Item />
        <Item />
      </Spinner>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  text-align: center;
  background: var(--color-grey);
`

const Spinner = styled.div`
  width: 1px;
  height: 100%;

  position: absolute;
  left: 50%;
  top: 0;
`
const Item = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  &:last-child {
    height: 0;

    background: var(--color-white);
    opacity: 0.5;
    animation: loading 2s infinite ease-in-out;
  }

  @keyframes loading {
    0% {
      height: 0;
      top: 0;
      bottom: auto;
    }
    50% {
      height: 100%;
      top: 0;
      bottom: auto;
    }
    51% {
      height: 100%;
      top: 0;
      bottom: auto;
    }
    52% {
      height: 100%;
      top: auto;
      bottom: 0;
    }
    100% {
      height: 0;
      top: auto;
      bottom: 0;
    }
  }
`
