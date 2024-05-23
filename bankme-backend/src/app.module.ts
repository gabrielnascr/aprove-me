import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PayableModule } from './modules/payable/payable.module';
import { AssignorModule } from './modules/assignor/assignor.module';
import { UserModule } from './modules/user/user.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database.sqlite',
    }),
    ClientsModule.register([
      {
        name: 'PAYABLE_BATCH_QUEUE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'payable_batch_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
    PayableModule,
    AssignorModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
