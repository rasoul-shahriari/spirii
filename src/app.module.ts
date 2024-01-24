import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AggregatorService } from './aggregator/aggregator.service';
import { AggregatorModule } from './aggregator/aggregator.module';
import { userDataController } from './users/user.controller';
import { TransactionsService } from './transactions/transactions.service';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [AggregatorModule, TransactionsModule],
  controllers: [AppController, userDataController],
  providers: [AppService, AggregatorService, TransactionsService],
})
export class AppModule {}
