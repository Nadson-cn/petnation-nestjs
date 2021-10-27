import { Module } from '@nestjs/common';
import { HealthModule } from './api/health/health.module';
import { AnimalsModule } from './api/animals/animals.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './api/users/users.module';
import { AuthModule } from './api/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    HealthModule,
    AnimalsModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
