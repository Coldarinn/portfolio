import { Suspense } from "react"
import { Preloader } from "@/components/Preloader"
import { Scrollbar } from "@/components/Scrollbar"
import { IntroAsync } from "@/components/Intro"
import { Cursor } from "@/components/Cursor"
import { SkillsAsync } from "./components/Skills"
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/locomotive-scroll.css"

new LocomotiveScroll({
  smooth: true,
});

export const App = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <IntroAsync />
        <SkillsAsync />

        <Cursor />
        <Scrollbar />
      </Suspense>
    </>
  )
}