import { ApiProperty } from '@nestjs/swagger';

export class UserAggregatedDataDTO {
  @ApiProperty({ example: '123', description: 'The ID of the user' })
  userId: string;

  @ApiProperty({ example: 200, description: 'Total balance of the user' })
  balance: number;

  @ApiProperty({ example: 500, description: 'Total amount earned by the user' })
  totalEarned: number;

  @ApiProperty({ example: 300, description: 'Total amount spent by the user' })
  totalSpent: number;

  @ApiProperty({
    example: 150,
    description: 'Total payout amount requested by the user',
  })
  totalPayoutRequested: number;
}
