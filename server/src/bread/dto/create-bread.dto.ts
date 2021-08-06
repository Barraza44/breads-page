import { Ingredients } from "../Ingredients";
import { IsString, Max, Min, IsNumber, IsUrl, Length, ValidateNested, IsArray } from "class-validator";
import { Type } from "class-transformer";

export class CreateBreadDto {
  @IsString()
  @Length(2, 100)
  name: string;

  @IsNumber()
  @Min(1)
  @Max(999)
  price: number;

  @IsString()
  @Length(1, 3000)
  description: string;

  @IsUrl()
  imageURI: string;

  @IsArray()
  @ValidateNested({each: true})
  @Type(() => Ingredients)
  ingredients: Ingredients[];
}
