import { Schema, Prop, SchemaFactory} from "@nestjs/mongoose";
import { Ingredients } from "../Ingredients";
import { Document } from "mongoose";

export type breadDocument = Bread & Document;

@Schema()
export class Bread {

  @Prop({ required: true})
  name: string;

  @Prop({ required: true})
  price: number;

  @Prop({ required: true})
  description: string;

  @Prop({ required: true})
  imageURI: string;

  @Prop({ required: true})
  ingredients: Ingredients[];
}

export const BreadSchema = SchemaFactory.createForClass(Bread);
