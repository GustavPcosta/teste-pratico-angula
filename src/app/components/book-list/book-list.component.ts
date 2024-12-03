import { Component, OnInit } from '@angular/core';

import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  //styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any[] = [];

  constructor(private authorService: BookService) {}

  ngOnInit() {
    this.loadBook();
  }

  loadBook() {
    this.authorService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  deleteAuthor(id: number) {
    this.authorService.deleteBook(id).subscribe(() => {
      this.loadBook(); 
    });
  }
}
