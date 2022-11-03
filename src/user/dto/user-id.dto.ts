import { ApiProperty } from '@nestjs/swagger';

export class userIdDto {
  @ApiProperty({
    description: 'id',
  })
  id: number;
}
