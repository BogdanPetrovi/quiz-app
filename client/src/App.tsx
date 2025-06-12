import { RouterProvider } from "react-router-dom"
import { router } from './router'
import { Analytics } from "@vercel/analytics/next"

export default function App() {
  return(
    <>
      <RouterProvider router={router} />
      <Analytics />
    </>
  )
}