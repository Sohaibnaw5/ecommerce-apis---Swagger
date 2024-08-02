import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderDto {
  @ApiProperty({ example: 1, required: false })
  productId?: number;

  @ApiProperty({ example: 2, required: false })
  quantity?: number;
}