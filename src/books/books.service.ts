import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Book } from "./schemas/books.schema";
import { Model } from "mongoose";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private booksModel: Model<Book>) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this.booksModel(createBookDto)
    return  createdBook.save()
  }

  async findAll(): Promise<Book[]> {
    return this.booksModel.find().exec()
  }

  async update(bookId: string, updateBookDto: UpdateBookDto) {
    const bookUpdated = this.booksModel.updateOne({ _id: bookId }, updateBookDto)
    return bookUpdated
  }

  async delete(id: string) {
    return this.booksModel.deleteOne({_id: id})
  }

  async findById(id: string): Promise<Book> {
    return this.booksModel.findById(id)
  }
}