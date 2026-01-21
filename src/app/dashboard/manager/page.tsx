'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { Order } from '@/types/order.types';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ManagerDashboard() {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<Order[]>('/orders')
      .then(res => setOrders(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading manager dashboard...</p>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Manager Dashboard ({user?.country})
      </h1>

      <div className="grid gap-4">
        {orders.map(order => (
          <Card key={order.id}>
            <CardHeader>
              <CardTitle className="flex justify-between">
                <span>Order #{order.id.slice(0, 6)}</span>
                <Badge>{order.status}</Badge>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-2 text-sm">
              <p><b>Restaurant:</b> {order.restaurant?.name}</p>
              <p><b>Total:</b> ₹{order.totalAmount}</p>
              <p><b>Items:</b> {order.orderItems.length}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
