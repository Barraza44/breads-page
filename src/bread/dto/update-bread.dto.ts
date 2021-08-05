import { PartialType } from '@nestjs/mapped-types';
import { CreateBreadDto } from './create-bread.dto';
import type { ObjectId } from "mongoose";

export class UpdateBreadDto extends PartialType(CreateBreadDto) {
  id: ObjectId;
}
