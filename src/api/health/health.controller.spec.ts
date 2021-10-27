import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { exception } from 'console';
import { HealthController } from './health.controller';

describe('Testing Health of app', () => {
  let healthController: HealthController;

  beforeEach(() => {
    healthController = new HealthController();
  });

  it('Testing Ping', async () => {
    const response = healthController.ping();
    expect(response).toMatchObject({ status: 'pong' });
  });
});
