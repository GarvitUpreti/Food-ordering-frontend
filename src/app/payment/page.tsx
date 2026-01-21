'use client';

import { useState } from 'react';
import { api } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function PaymentPage() {
  const [cardNumber, setCardNumber] = useState('');

  const updatePayment = async () => {
    await api.patch('/payments', { cardNumber });
  };

  return (
    <div className="space-y-4 max-w-md">
      <h1 className="text-3xl font-bold">Update Payment Method</h1>

      <Input
        placeholder="Card Number"
        value={cardNumber}
        onChange={e => setCardNumber(e.target.value)}
      />

      <Button onClick={updatePayment}>Update</Button>
    </div>
  );
}
