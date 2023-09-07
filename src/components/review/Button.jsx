function Button({text, type}) {
  return (
    <button type={type} className='text-white bg-primary rounded shadow-sm shadow-slate-300 text-base px-7 py-3 w-80 md:w-full self-center'>{text}</button>
  )
}

export default Button