import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Product Name' })
  name: string;

  @ApiProperty({ example: 'Product Description' })
  description: string;

  @ApiProperty({ example: 100 })
  price: number;
}
