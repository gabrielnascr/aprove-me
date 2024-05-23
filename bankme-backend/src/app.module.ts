import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AssignorModule } from './modules/assignor/assignor.module';
import { ReceivableModule } from './modules/receivable/receivable.module';

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
    UserModule,
    AssignorModule,
    ReceivableModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
