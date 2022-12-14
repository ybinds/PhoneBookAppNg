import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../services/contact-service.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] =[];
  msg: string = '';
  errorMsg : string= '';

  constructor(private _service: ContactService, private _router: Router ){}

  ngOnInit() {
   this.getContactList();
   this.msg = this._service.getMessage();
  }
  getContactList(){
    this._service.getContactList().subscribe({
      next: (data)=> (this.contacts=data),
      error: (error)=> console.log(error),
      complete: () => console.log("Complete")
    });
  }

  deleteContact(id: number){
    if(confirm("Are you sure you want to delete this item?")){
      this._service.deleteContact(id).subscribe({
        next: (data) => {
          this.msg = data;
          this.getContactList();
        },
        error: (error) => this.errorMsg=error.statusText,
        complete: () => console.log("Complete")
      });
    }
  }

  getContact(id: number){
    this._router.navigate(['./contact/'+id]);
  }
}
