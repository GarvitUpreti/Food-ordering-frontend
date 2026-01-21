'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { Restaurant } from '@/types/restaurant.types';
import RestaurantCard from '@/components/restaurant/RestaurantCard';

export default function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    api.get('/restaurants').then(res => setRestaurants(res.data));
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Restaurants</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {restaurants.map(r => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>
    </div>
  );
}
