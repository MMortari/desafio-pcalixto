import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  baseUrl = 'http://localhost:3333';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<any[]>(`${this.baseUrl}/`);
  }

  create(contact) {
    return this.http.post<any[]>(`${this.baseUrl}/`, contact);
  }

  update(contact) {
    return this.http.put<any[]>(`${this.baseUrl}/${contact.id}`, contact);
  }

  delete(id) {
    return this.http.post<any[]>(`${this.baseUrl}/${id}`, {});
  }

}
