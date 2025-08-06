import { useCart } from "../context/cartProvider";

const CartModal = ({ onClose }) => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="fixed top-0 right-0 w-full md:w-[400px] h-full bg-white shadow-lg z-50 p-6 overflow-y-auto">
      <button className="mb-4 text-red-500 font-bold" onClick={onClose}>
        Close
      </button>
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item, i) => (
          <div key={i} className="mb-3 border-b pb-2">
            <p>{item.name} - ${item.price}</p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-sm text-red-600 hover:underline"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartModal;
