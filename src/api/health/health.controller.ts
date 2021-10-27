import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('')
@ApiTags('health')
export class HealthController {
  private pingReturn = { status: 'pong' };
  private healthReturn = { status: 'Server is healthy' };

  @Get('/ping')
  ping() {
    return this.pingReturn;
  }
}
