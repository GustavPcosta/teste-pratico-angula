import {RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { BookListComponent } from './components/book-list/book-list.component';
export const routes: Routes = [
    { path: 'authors', component: AuthorListComponent },
  { path: '', redirectTo: '/authors', pathMatch: 'full' },
  { path: 'books', component: BookListComponent },
  {path: '', redirectTo: '/books', pathMatch: 'full'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })export class AppRoutingModule {}