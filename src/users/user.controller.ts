import { Controller, Get, Param } from '@nestjs/common';
import { UserAggregatedDataDTO } from './user.dto';
import { AggregatorService } from 'src/aggregator/aggregator.service';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class userDataController {
  constructor(private readonly aggregatorService: AggregatorService) {}

  @Get(':id/aggregated-data')
  @ApiOperation({ summary: 'Get aggregated data for a specific user' })
  @ApiParam({ name: 'id', type: String, description: 'The ID of the user' })
  async getAggregatedDataByUserId(
    @Param('id') id: string,
  ): Promise<UserAggregatedDataDTO> {
    return await this.aggregatorService.getAggregatedDataByUserId(id);
  }

  @Get('payout')
  @ApiOperation({ summary: 'Get aggregated data for a specific user' })
  async getPayout(): Promise<any> {
    return await this.aggregatorService.getPayouts();
  }
}
