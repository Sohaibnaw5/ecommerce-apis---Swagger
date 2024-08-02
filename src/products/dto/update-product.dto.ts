import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto {
  @ApiProperty({ example: 'Product Name', required: false })
  name?: string;

  @ApiProperty({ example: 'Product Description', required: false })
  description?: string;

  @ApiProperty({ example: 100, required: false })
  price?: number;
}
