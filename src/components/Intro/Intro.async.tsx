import { lazy } from "react"

export const IntroAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        // @ts-ignore
        resolve(import("./Intro"))
      }, 2000)
    }),
)
