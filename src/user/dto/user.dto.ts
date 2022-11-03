import { ApiProperty } from '@nestjs/swagger';

export class userDto {
  @ApiProperty({
    description: 'name',
  })
  name: string;

  @ApiProperty({
    description: 'role',
  })
  role: string;

  @ApiProperty({
    description: 'location',
  })
  location: string;
}
