import { Injectable } from '@nestjs/common';
import { mockTransactions } from './mock-transactions';
import { TransactionDTO } from './transactions.dto';

@Injectable()
export class TransactionsService {
  private transactions: TransactionDTO[] = mockTransactions;

  getAllTransactions(): TransactionDTO[] {
    return this.transactions;
  }

  findTransactionsByUserId(userId: string): TransactionDTO[] {
    return this.transactions.filter(
      (transaction) => transaction.userId === userId,
    );
  }
}
