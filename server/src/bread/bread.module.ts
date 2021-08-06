import { CacheInterceptor, CacheModule, Module } from "@nestjs/common";
import { BreadService } from './bread.service';
import { BreadController } from './bread.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Bread, BreadSchema } from "./schemas/bread.schema";
import { APP_INTERCEPTOR } from "@nestjs/core";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Bread.name, schema: BreadSchema}]),
    CacheModule.register({ttl: 5,  max: 10,})],
  controllers: [BreadController],
  providers: [
    BreadService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor
    },
  ]
})
export class BreadModule {}
