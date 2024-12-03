import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = 'http://localhost:3000/authors'; // URL do backend NestJS

  constructor(private http: HttpClient) {}

  
  getAuthors(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  
  createAuthor(author: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, author);
  }

  
  updateAuthor(id: number, author: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, author);
  }

  
  deleteAuthor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}