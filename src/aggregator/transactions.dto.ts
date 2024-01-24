export class TransactionDTO {
  id: string;
  userId: string;
  createdAt: string;
  type: 'payout' | 'spent' | 'earned';
  amount: number;
}
