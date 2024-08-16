/**
 *This is going to be my main button component, i'll make sure to allow color changes, but green as default
 */
// eslint-disable-next-line react/prop-types
const Button = ({ children, disabled, onClick, color, hoverColor}) => {
    const backgroundColor = color || 'bg-green-400';
    const backgroundHoverColor = hoverColor || 'bg-green-700';
    return (
    <div className="flex justify-end p-2">
        <button type="button" onClick={onClick} disabled={disabled}  className={`ml-8 ${backgroundColor} rounded-lg h-fit w-fit px-4 py-4 text-white hover:${backgroundHoverColor}`}>
            { children }
        </button>
        
    </div>
    )
};
  
  export default Button;