import React from 'react'
import ChangeLanguage from './Header'

interface BackgroundProps {
  children?: React.ReactNode
}

export default function Background({children}: BackgroundProps) {
  return (
    <>
    <ChangeLanguage />
    <div className="min-h-screen w-screen pb-8 bg-linear-to-b overflow-y-hidden from-purple-400 to-purple-100 flex justify-center items-center flex-col gap-5">
      {children}
    </div>
    </>
  )
}
