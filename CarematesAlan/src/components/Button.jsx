/**
 *This is going to be my main button component, i'll make sure to allow color changes, but green as default
 */
// eslint-disable-next-line react/prop-types
const Button = ({ children, disabled, onClick, color, hoverColor}) => (
    <div className="flex justify-end p-2">
        <button type="button" onClick={onClick} disabled={disabled} className={`${disabled ? 'ml-8 bg-gray-400 rounded-lg h-fit w-fit px-4 py-4 text-white' : `ml-8 bg-green-400 ${color} rounded-lg h-fit w-fit px-4 py-4 text-white hover:${hoverColor} hover:bg-green-700 '}`}`}>
            { children }
        </button>
        
    </div>
  );
  
  export default Button;