import { Ingredients } from "../Ingredients";

export class CreateBreadDto {
  name: string;
  price: number;
  description: string;
  imageURI: string;
  ingredients: Ingredients[];
}
