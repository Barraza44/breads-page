import { Module } from '@nestjs/common';
import { BreadService } from './bread.service';
import { BreadController } from './bread.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Bread, BreadSchema } from "./schemas/bread.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Bread.name, schema: BreadSchema}])],
  controllers: [BreadController],
  providers: [BreadService]
})
export class BreadModule {}
