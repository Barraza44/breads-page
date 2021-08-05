import { Injectable } from '@nestjs/common';
import { CreateBreadDto } from './dto/create-bread.dto';
import { UpdateBreadDto } from './dto/update-bread.dto';
import { Bread, breadDocument } from "./schemas/bread.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import type { ObjectId } from "mongoose";

@Injectable()
export class BreadService {
  constructor(
    @InjectModel(Bread.name)
    private breadModel: Model<breadDocument>,
  ) {}

  async create(createBreadDto: CreateBreadDto) {
    const newBread = await this.breadModel.create(createBreadDto);
    return newBread.save();
  }

  async findAll(): Promise<Bread[]> {
    return this.breadModel.find().exec();
  }

  async findOne(id: ObjectId) {
    return this.breadModel.findById(id).exec();
  }

  async update(id: ObjectId, updateBreadDto: UpdateBreadDto) {
    return `This action updates a #${id} bread`;
  }

  async remove(id: ObjectId) {
    return `This action removes a #${id} bread`;
  }
}
