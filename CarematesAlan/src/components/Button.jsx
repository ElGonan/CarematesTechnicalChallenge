/**
 *This is going to be my main button component, i'll make sure to allow color changes, but green as default
 */
// eslint-disable-next-line react/prop-types
const Button = ({ children }) => (
    <button className=' bg-green-300 rounded-lg h-fit w-fit px-4 py-4 text-white hover:bg-green-700'>
      { children }
    </button>
  );
  
  export default Button;