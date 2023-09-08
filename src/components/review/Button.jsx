import { string } from 'prop-types';

function Button({text, type}) {
  return (
    <button type={type} className='text-white bg-primary rounded shadow-sm shadow-slate-300 text-base px-7 py-3 w-full self-center'>{text}</button>
  )
}

Button.propTypes = {
  text: string,
  type: string
};

export default Button