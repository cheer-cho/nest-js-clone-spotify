import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}
  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    // Persist the song to the Database
    return this.songService.create(createSongDTO);
  }

  @Get()
  findAll() {
    // Get all songs from Database

    try {
      this.songService.findAll();
    } catch (error) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }

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
