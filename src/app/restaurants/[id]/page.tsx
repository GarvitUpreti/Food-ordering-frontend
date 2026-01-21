'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { MenuItem } from '@/types/restaurant.types';
import { useParams } from 'next/navigation';
import MenuItemCard from '@/components/restaurant/MenuItemCard';

export default function RestaurantDetailPage() {
  const { id } = useParams();
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    api.get(`/restaurants/${id}/menu`).then(res => setMenu(res.data));
  }, [id]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Menu</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {menu.map(item => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
