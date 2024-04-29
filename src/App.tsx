import { Suspense } from "react"
import { Preloader } from "@/components/Preloader"
import { Scrollbar } from "@/components/Scrollbar"
import { IntroAsync } from "@/components/Intro"
import { Cursor } from "@/components/Cursor"
// import { MatrixBackground } from "@/components/MatrixBackground"

export const App = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <IntroAsync />
        <Cursor />
        <Scrollbar />
      </Suspense>

      {/* <MatrixBackground /> */}
    </>
  )
}
