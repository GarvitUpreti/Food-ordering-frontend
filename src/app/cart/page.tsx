'use client';

import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

export default function CartPage() {
  const { cart, updateCartItem, removeCartItem, checkout, loading } = useCart();

  const items = cart?.orderItems || [];

  if (!cart || items.length === 0) {
    return <p className="p-6">Your cart is empty</p>;
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Your Cart</h1>

      {items.map(item => (
        <div key={item.id} className="flex justify-between items-center border p-3 rounded">
          <div>
            <p className="font-semibold">{item.menuItem?.name}</p>
            <p className="text-sm text-gray-500">₹{item.price}</p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => updateCartItem(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              -
            </Button>

            <span>{item.quantity}</span>

            <Button
              onClick={() => updateCartItem(item.id, item.quantity + 1)}
            >
              +
            </Button>

            <Button
              variant="destructive"
              onClick={() => removeCartItem(item.id)}
            >
              Remove
            </Button>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center pt-4 border-t">
        <p className="font-bold text-lg">
          Total: ₹{cart.totalAmount}
        </p>

        <Button onClick={checkout} disabled={loading}>
          Checkout
        </Button>
      </div>
    </div>
  );
}
