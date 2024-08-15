/**
 *This is going to be my main button component, i'll make sure to allow color changes, but green as default
 */
// eslint-disable-next-line react/prop-types
const Button = ({ children }) => (
    <div className="flex justify-end">
        <button className='ml-8 bg-green-400 rounded-lg h-fit w-fit px-4 py-4 text-white hover:bg-green-700'>
            { children }
        </button>
    </div>
  );
  
  export default Button;