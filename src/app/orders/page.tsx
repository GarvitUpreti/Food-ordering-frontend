'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { Order } from '@/types/order.types';
import { Button } from '@/components/ui/button';

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.get('/orders').then(res => setOrders(res.data));
  }, []);

  const cancelOrder = async (id: string) => {
    await api.patch(`/orders/${id}/cancel`);
    setOrders(prev => prev.filter(o => o.id !== id));
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Orders</h1>

      {orders.map(order => (
        <div key={order.id} className="border p-4 rounded">
          <p>Status: {order.status}</p>
          <p>Total: ₹{order.totalAmount}</p>

          <Button
            variant="destructive"
            onClick={() => cancelOrder(order.id)}
          >
            Cancel Order
          </Button>
        </div>
      ))}
    </div>
  );
}
