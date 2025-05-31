import React from "react"

interface ButtonInterface {
  text: string,
  isDisabled?: boolean
}

const Button: React.FC<ButtonInterface> = ({ text, isDisabled }) =>  {
  return(
    <div className="min-w-1/4 text-center">
      {
        isDisabled === true ? 
        <h3 className="text-3xl p-5 bg-purple-300 text-zinc-800 rounded-3xl font-bold select-none">{text}</h3>
        :
        <h3 className="text-3xl p-5 bg-purple-200 rounded-3xl cursor-pointer font-bold hover:rounded-4xl hover:text-4xl duration-500 select-none">{text}</h3>
      }
    </div>
  )
}

export default Button;