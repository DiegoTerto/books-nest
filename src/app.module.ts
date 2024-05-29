import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { ProductsModule } from './products/products.module';
import { CreateProductMiddleware } from './products/middleware/create-product.middleware';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0/book-nest-db'),
    BooksModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CreateProductMiddleware)
      .forRoutes({ path: 'products', method: RequestMethod.POST })
  }
}
