import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreadModule } from './bread/bread.module';
import { MongooseModule } from "@nestjs/mongoose";
import {InvalidIdFilter} from "./filters/invalid-id.filter";
import { APP_FILTER } from "@nestjs/core";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
  imports: [
    BreadModule,
    MongooseModule.forRoot('mongodb://nesty:nestymn4@localhost:27017/Bread?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, "..", "client"), exclude: ['/api*']})
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: InvalidIdFilter
    }
  ],
})
export class AppModule {}
