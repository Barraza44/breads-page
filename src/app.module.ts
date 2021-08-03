import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreadModule } from './bread/bread.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    BreadModule,
    MongooseModule.forRoot('mongodb://nesty:nestymn4@localhost:27017/Bread?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
