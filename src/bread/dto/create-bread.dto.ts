import { Ingredients } from "../Ingredients";
import { IsString, Max, Min, IsNumber, IsUrl, Length, ValidateNested, MaxLength } from "class-validator";

export class CreateBreadDto {
  @IsString()
  @Length(1, 100)
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

  @ValidateNested()
  @MaxLength(20, {
    each: true
  })
  ingredients: Ingredients[];
}
