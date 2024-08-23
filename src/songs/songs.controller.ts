import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { Connection } from 'src/common/constants/connection';

@Controller('songs')
export class SongsController {
  constructor(
    private songService: SongsService,
    @Inject('CONNECTION')
    private connection: Connection,
  ) {
    console.log(
      `THIS IS CONNECTION STRING ${this.connection.CONNECTION_STRING}`,
    );
  }
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
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return `song id ${typeof id}`;
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
