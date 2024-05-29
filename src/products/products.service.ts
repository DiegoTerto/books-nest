import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './schemas/products.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto)
    return createdProduct
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec()
  }

  async findOne(id: string): Promise<Product> {
    return this.productModel.findById(id)
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const productUpdated = this.productModel.updateOne({ _id: id }, updateProductDto)
    return productUpdated;
  }

  async remove(id: string) {
    return this.productModel.deleteOne({ _id: id });
  }
}
