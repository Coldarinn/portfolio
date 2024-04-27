import { Suspense } from "react"
import { Preloader } from "@/components/Preloader"
import { Scrollbar } from "@/components/Scrollbar"
import { IntroAsync } from "@/components/Intro"
import { MatrixBackground } from "@/components/MatrixBackground"

export const App = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <IntroAsync />
      </Suspense>

      <MatrixBackground />

      <Scrollbar />
    </>
  )
}
