/**
 * Card component for rendering a card container.
 * @param {Object} props - The props for the Card component.
 * @param {React.ReactNode} props.children - The content of the card.
 * @returns {JSX.Element} - The Card component.
 */
// eslint-disable-next-line react/prop-types
const Card = ({ children }) => (
    <div className=' bg-gray-300 rounded-lg px-8 py-8 '>
      { children }
    </div>
  );
  
  export default Card;