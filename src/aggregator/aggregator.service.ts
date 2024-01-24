import { Injectable } from '@nestjs/common';
import { UserAggregatedDataDTO } from 'src/users/user.dto';
import { TransactionsService } from 'src/transactions/transactions.service';

@Injectable()
export class AggregatorService {
  constructor(private readonly transactionService: TransactionsService) {}

  async getAggregatedDataByUserId(id: string) {
    const transactions = this.transactionService.findTransactionsByUserId(id);
    const aggregatedData = new UserAggregatedDataDTO();

    aggregatedData.userId = id;
    aggregatedData.balance = 0;
    aggregatedData.totalEarned = 0;
    aggregatedData.totalSpent = 0;
    aggregatedData.totalPayoutRequested = 0;

    transactions.forEach((transaction) => {
      switch (transaction.type) {
        case 'earned':
          aggregatedData.totalEarned += transaction.amount;
          aggregatedData.balance += transaction.amount;
          break;
        case 'spent':
          aggregatedData.totalSpent += transaction.amount;
          aggregatedData.balance -= transaction.amount;
          break;
        case 'payout':
          aggregatedData.totalPayoutRequested += transaction.amount;
          break;
      }
    });

    return aggregatedData;
  }

  async getPayouts(): Promise<{ userId: string; totalPayoutAmount: number }[]> {
    const transactions = this.transactionService.getAllTransactions();
    const payoutMap = new Map<string, number>();

    transactions.forEach((transaction) => {
      if (transaction.type === 'payout') {
        const userId = transaction.userId;
        const amount = transaction.amount;

        if (payoutMap.has(userId)) {
          payoutMap.set(userId, payoutMap.get(userId) + amount);
        } else {
          payoutMap.set(userId, amount);
        }
      }
    });

    const aggregatedPayouts: { userId: string; totalPayoutAmount: number }[] =
      [];
    payoutMap.forEach((totalPayoutAmount, userId) => {
      aggregatedPayouts.push({ userId, totalPayoutAmount });
    });

    return aggregatedPayouts;
  }
}
