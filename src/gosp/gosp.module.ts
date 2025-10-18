import { Module } from '@nestjs/common';
import { GospService } from './gosp.service';
import { GospController } from './gosp.controller';

@Module({
  providers: [GospService],
  controllers: [GospController]
})
export class GospModule {}
