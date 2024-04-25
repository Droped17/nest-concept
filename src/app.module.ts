import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { MongooseModule } from '@nestjs/mongoose';
import { Product2Module } from './product2/product2.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    // MongooseModule.forRoot(
    //   'mongodb://root:example@localhost:27017/testnest?authSource=admin',
    // ),
    Product2Module,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
