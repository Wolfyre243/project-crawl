import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT as string, 10),
      },
      defaultJobOptions: { attempts: 3 }
    }),
    BullModule.registerQueue({ name: 'tiktok-scraper' }) // can list multiple queues
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
