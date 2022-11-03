/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { userDto } from './dto/user.dto';
import { UserService } from './user.service';
import { Response } from 'express';
import { userIdDto } from './dto/user-id.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'get user list',
  })
  @ApiOkResponse({ description: 'The request has succeeded' })
  @ApiBadRequestResponse({ description: 'The request was invalid' })
  @ApiNotFoundResponse({ description: 'The request was not found' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  @Get('list')
  getUserList(@Res() res: Response) {
    const users = this.userService.userList();
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'success',
      data: users,
    });
  }

  @ApiOperation({
    summary: 'create user',
  })
  @ApiOkResponse({ description: 'The request has succeeded' })
  @ApiBadRequestResponse({ description: 'The request was invalid' })
  @ApiNotFoundResponse({ description: 'The request was not found' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  @Post()
  createUser(@Res() res: Response, @Body() body: userDto) {
    this.userService.addUser(body);
    res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      message: 'successfully created',
    });
  }

  @ApiOperation({
    summary: 'delete user',
  })
  @ApiOkResponse({ description: 'The request has succeeded' })
  @ApiBadRequestResponse({ description: 'The request was invalid' })
  @ApiNotFoundResponse({ description: 'The request was not found' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  @Delete('/:id')
  deleteUser(@Res() res: Response, @Param() param: userIdDto) {
    this.userService.deleteUser(param);

    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'successfully deleted',
    });
  }

  @ApiOperation({
    summary: 'get one user',
  })
  @ApiOkResponse({ description: 'The request has succeeded' })
  @ApiBadRequestResponse({ description: 'The request was invalid' })
  @ApiNotFoundResponse({ description: 'The request was not found' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  @Get('/:id')
  getUser(@Res() res: Response, @Param() param: userIdDto) {
    const user = this.userService.getUser(param);

    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'successfully get',
      data: user,
    });
  }
}
