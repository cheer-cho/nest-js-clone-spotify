import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { connection } from 'src/common/constants/connection';

// const mockSongsService = {
//   findAll() {
//     return [{ id: 1, title: 'bla bla bla', artists: ['asda'] }];
//   },
// };
@Module({
  controllers: [SongsController],
  // standard provider
  // providers: [SongsService],

  // another syntax of standard provider
  // providers: [
  //   {
  //     provide: SongsService,
  //     useClass: SongsService,
  //   },
  // ],

  // Value provider: useValue
  // providers: [
  //   {
  //     provide: SongsService,
  //     useValue: mockSongsService,
  //   },
  // ],

  // Non Class based Providers: useValue
  providers: [
    SongsService,
    {
      provide: 'CONNECTION',
      useValue: connection,
    },
  ],
})
export class SongsModule {}
