'use client';

import { MenuItem } from '@/types/restaurant.types';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

interface Props {
  item: MenuItem;
}

export default function MenuItemCard({ item }: Props) {
  const { addToCart, loading } = useCart();

  const handleAdd = () => {
    addToCart(item.restaurantId, {
      menuItemId: item.id,
      quantity: 1,
    });
  };

  return (
    <div className="border rounded p-4 space-y-2">
      <h3 className="font-semibold">{item.name}</h3>
      <p className="text-sm text-gray-600">{item.description}</p>
      <p className="font-bold">₹{item.price}</p>

      <Button onClick={handleAdd} disabled={loading}>
        Add to Cart
      </Button>
    </div>
  );
}
