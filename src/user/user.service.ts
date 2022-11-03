/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { userIdDto } from './dto/user-id.dto';
import { userDto } from './dto/user.dto';

const users = [
  {
    id: 1,
    name: 'wido',
    role: 'admin',
    location: 'bandung',
  },
  {
    id: 2,
    name: 'wido1',
    role: 'user',
    location: 'bandung',
  },
  {
    id: 3,
    name: 'wido2',
    role: 'user',
    location: 'bandung',
  },
  {
    id: 4,
    name: 'wido3',
    role: 'user',
    location: 'jakarta',
  },
];

@Injectable()
export class UserService {
  userList() {
    return users;
  }

  addUser(payload: userDto) {
    const user = {
      id: users[users.length - 1].id + 1,
      name: payload.name,
      role: payload.role,
      location: payload.location,
    };
    users.push(user);
  }

  deleteUser(payload: userIdDto) {
    const userIndex = users.findIndex((e) => e.id == payload.id);

    users.splice(userIndex, 1);
  }

  getUser(payload: userIdDto) {
    const user = users.find((e) => e.id == payload.id);

    return user;
  }
}
