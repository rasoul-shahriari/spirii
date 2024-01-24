import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsIn, IsNumber } from 'class-validator';

export class TransactionDTO {
  @ApiProperty({ description: 'User ID' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'User ID' })
  @IsString()
  userId: string;

  @ApiProperty({
    description: 'Transaction type (earn, spend, payout)',
  })
  @IsString()
  @IsIn(['earned', 'spent', 'payout'])
  type: 'earned' | 'spent' | 'payout';

  @ApiProperty({ description: 'Transaction amount' })
  @IsNumber()
  amount: number;

  @ApiProperty({ description: 'Transaction amount' })
  @IsNumber()
  createdAt: string;
}
