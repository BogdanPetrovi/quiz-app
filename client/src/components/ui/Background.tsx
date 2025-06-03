import React from 'react'
import ChangeLanguage from './ChangeLanguage'

interface BackgroundProps {
  children?: React.ReactNode
}

export default function Background({children}: BackgroundProps) {
  return (
    <>
    <ChangeLanguage />
    <div className="min-h-screen lg:h-screen w-screen bg-linear-to-b from-purple-400 to-purple-100 flex justify-center items-center flex-col gap-5">
      {children}
    </div>
    </>
  )
}
