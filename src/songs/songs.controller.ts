import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}
  @Post()
  create() {
    // Persist the song to the Database
    return this.songService.create('song 1');
  }

  @Get()
  findAll() {
    // Get all songs from Database
    return this.songService.findAll();
  }

  @Get(':id')
  findOne() {
    return 'find song by id';
  }

  @Put(':id')
  update() {
    return 'update song by id';
  }

  @Delete(':id')
  delete() {
    return 'delete song by id';
  }

  @Patch(':id')
  patch() {
    return 'patch song by id';
  }
}
