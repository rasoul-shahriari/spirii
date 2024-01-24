import { Module } from '@nestjs/common';
import { AggregatorService } from './aggregator.service';
import { TransactionsService } from 'src/transactions/transactions.service';

@Module({
  providers: [AggregatorService, TransactionsService],
  exports: [AggregatorService],
  controllers: [],
})
export class AggregatorModule {}
