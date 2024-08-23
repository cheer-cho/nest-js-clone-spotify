import { Inject, Injectable } from '@nestjs/common';
import { Connection } from 'src/common/constants/connection';

@Injectable()
export class SongsService {
  // local db
  // local array

  private readonly songs = [];

  constructor(@Inject('CONNECTION') connection: Connection) {
    console.log('connection string', connection.CONNECTION_STRING);
  }

  create(song) {
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    // fetch the songs from the db
    // Errors comes while fetching the data from DB
    throw new Error('Error in Db while fetching record');
    return this.songs;
  }
}
