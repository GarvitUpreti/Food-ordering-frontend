import Link from 'next/link';
import { Restaurant } from '@/types/restaurant.types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <Link href={`/restaurants/${restaurant.id}`}>
      <Card className="cursor-pointer hover:shadow-lg">
        <CardHeader>
          <CardTitle>{restaurant.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{restaurant.description}</p>
          <p className="text-sm text-gray-500">{restaurant.country}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
