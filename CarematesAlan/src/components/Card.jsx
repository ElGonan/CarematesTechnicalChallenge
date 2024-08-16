/**
 * Card component for rendering a card container.
 * @param {Object} props - The props for the Card component.
 * @param {React.ReactNode} props.children - The content of the card.
 * @returns {JSX.Element} - The Card component.
 */
// eslint-disable-next-line react/prop-types
const Card = ({ children, color, shadowColor }) => {
    const backgroundColor = color || 'bg-gray-200';
    const shadow = shadowColor || 'shadow-lg';

    return (
    <div className={`${backgroundColor} rounded-lg px-4 py-4 mb-4 mx-8 ${shadow}`}>
      { children }
    </div>
    )
};
  
  export default Card;