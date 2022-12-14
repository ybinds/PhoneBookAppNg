import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../services/contact-service.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  contactInfo: Contact=new Contact(0,'','','');

  constructor(
    private _activatedRoute: ActivatedRoute, 
    private _service: ContactService,
    private _router: Router){}

  ngOnInit() {
    let id:any = this._activatedRoute.snapshot.paramMap.get('id');
    this.getContact(id);
  }

  getContact(id: number){
    this._service.getContactInfo(id).subscribe({
      next: (data) => (this.contactInfo = data),
      error: (error) => console.log(error),
      complete: () => console.log("Complete")
    });
  }
  
  updateContact(){
    this._service.updateContact(this.contactInfo).subscribe({
      next: (data) => {
        this._service.setMessage(data)
        this._router.navigateByUrl("/contacts");
      },
      error: (error) => console.log(error),
      complete: () => console.log('Complete')
    });
  }
  
}
