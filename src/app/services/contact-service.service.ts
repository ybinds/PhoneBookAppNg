import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  baseUrl="http://localhost:9090/v1/api/contact";
  message: string = '';

  constructor(private _http: HttpClient) { }

  createContact(contact:Contact): Observable<any> {
    return this._http.post(
      `${this.baseUrl}/`, contact, {responseType: 'text'}
    );
  }

  setMessage(msg: string) {
    this.message = msg;
  }

  getMessage(): string {
    return this.message;
  }
  
  getContactList(): Observable<Contact[]> {
    return this._http.get<Contact[]>(`${this.baseUrl}/contacts`, {responseType: 'json'});
  }

  getContactInfo(id: number): Observable<Contact>{
    return this._http.get<Contact>(`${this.baseUrl}/contact/${id}`);
  }

  deleteContact(id: number): Observable<any> {
    return this._http.delete(`${this.baseUrl}/contact/${id}`, {responseType: 'text'});
  }

  updateContact(contact: Contact): Observable<any>{
    return this._http.put(`${this.baseUrl}/contact`, contact, {responseType: 'text'});
    ;
  }
  
}
