interface SubmitProps {
  text: string,
  handleClick: () => void
}

export default function Submit({ text, handleClick }: SubmitProps) {
  return (
    <div className="font-bold text-3xl bg-purple-200 rounded-lg p-3 cursor-pointer hover:bg-purple-400 select-none active:bg-purple-600 duration-300" onClick={handleClick}>
      { text }
    </div>
  )
}
