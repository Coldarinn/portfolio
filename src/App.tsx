import { Suspense } from "react"
import { Preloader } from "@/components/Preloader"
import { Scrollbar } from "@/components/Scrollbar"
import { IntroAsync } from "@/components/Intro"
import { Cursor } from "@/components/Cursor"
import { SkillsAsync } from "./components/Skills"
import { useGSAP } from "@gsap/react"
// import { MatrixBackground } from "@/components/MatrixBackground"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

export const App = () => {
  // useSmoothScroll()

  return (
    <>
      <Suspense fallback={<Preloader />}>
        <IntroAsync />
        <SkillsAsync />

        <Cursor />
        <Scrollbar />
      </Suspense>

      {/* <MatrixBackground /> */}
    </>
  )
}

const useSmoothScroll = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollToPlugin)
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault()

      const delta = Math.max(-1, Math.min(1, event.deltaY || -event.detail))
      const speed = 1.5

      gsap.to(window, {
        duration: speed,
        scrollTo: { y: window.scrollY + delta * 250 },
        ease: "power4.out",
      })
    }

    window.addEventListener("wheel", handleScroll)

    return () => {
      window.removeEventListener("wheel", handleScroll)
    }
  }, [])
}
