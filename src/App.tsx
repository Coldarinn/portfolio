import { Suspense } from "react"
import { Preloader } from "@/components/Preloader"
import { Scrollbar } from "@/components/Scrollbar"
import { IntroAsync } from "@/components/Intro"

export const App = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <IntroAsync />
      </Suspense>

      <Scrollbar />
    </>
  )
}
