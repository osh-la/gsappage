import { useCart } from "../context/cartProvider";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.map((item, i) => (
        <div key={i}>
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
