import { Module } from '@nestjs/common';
import { ChampionsModule } from './champions/champions.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    ChampionsModule,
    TypeOrmModule.forRoot({
      type:'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'exposicion',
      autoLoadEntities:true,
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
