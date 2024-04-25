import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProduct2Dto {
  @IsString()
  readonly name: string;
  @IsString()
  @IsOptional()
  readonly description?: string;
  @IsNumber()
  readonly price: number;
}
