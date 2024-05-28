import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0/book-nest-db'),
    BooksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
