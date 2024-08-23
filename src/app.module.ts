import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { SongsController } from './songs/songs.controller';
import { DevConfigService } from './common/providers/DevConfigService';

const devConfig = { port: 3000 };
const prodConfig = { port: 400 };
@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [
    AppService,
    // Class Provider: useClass
    {
      provide: DevConfigService,
      useClass: DevConfigService,
    },
    {
      // Non-service provider, useFactory
      provide: 'CONFIG',
      useFactory: () =>
        process.env.NODE_ENV === 'development' ? devConfig : prodConfig,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('songs'); // option #1
    // consumer
    //   .apply(LoggerMiddleware)
    //   .forRoutes({ path: 'songs', method: RequestMethod.POST }); // option #2
    consumer.apply(LoggerMiddleware).forRoutes(SongsController); // option #3
  }
}
