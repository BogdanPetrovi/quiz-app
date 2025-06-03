import React from "react"
import { useNavigate } from "react-router-dom"

interface ButtonInterface {
  text: string,
  route: string,
  isDisabled?: boolean
}

const Button: React.FC<ButtonInterface> = ({ text, route, isDisabled }) =>  {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route)
  }

  return(
    <div className="min-w-1/4 max-w-3/4 text-center text-3xl font-bold select-none">
      {
        isDisabled === true ? 
        <h3 className="p-5 bg-purple-200 opacity-60 rounded-3xl cursor-not-allowed">{text}</h3>
        :
        <h3 className="p-5 bg-purple-200 rounded-3xl cursor-pointer hover:rounded-4xl hover:text-4xl duration-500" onClick={handleClick}>{text}</h3>
      }
    </div>
  )
}

export default Button;