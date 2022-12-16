import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  baseUrl="http://localhost:9090/v1/api";
  message: string = '';

  constructor(private _http: HttpClient) { }

  setMessage(msg: string) {
    this.message = msg;
  }

  getMessage(): string {
    return this.message;
  }
  
  createContact(contact:Contact): Observable<any> {
    return this._http.post(
      `${this.baseUrl}/contact`, contact, {responseType: 'text'}
    );
  }
  getContactList(): Observable<Contact[]> {
    return this._http.get<Contact[]>(`${this.baseUrl}/contacts`, {responseType: 'json'});
  }

  getContactListBySearch(word:any): Observable<Contact[]> {
    return this._http.get<Contact[]>(`${this.baseUrl}/search/${word}`, {responseType: 'json'});
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
