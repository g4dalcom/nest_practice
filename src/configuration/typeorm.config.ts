import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeormConfig implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '6025',
      database: 'test',
      synchronize: true,
      logging: true,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      extra: {
        max: 100,
      },
    } as TypeOrmModuleOptions;
  }
}
