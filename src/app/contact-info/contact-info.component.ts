import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../services/contact-service.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent //implements AfterViewInit
{

  contactInfo = new Contact(0,'','','');
  msg: string ='';
  /*@ViewChild('name')
  nameElementRef!: ElementRef;*/
  
  constructor(
    private _service: ContactService, 
    private _router: Router){}
  /*ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus();
  }*/

  createContact(contactForm:any){
    this._service.createContact(this.contactInfo).subscribe({
      next: (data) => {this.msg = data,
          this.contactInfo = new Contact(0,'','','');
          this._service.setMessage(data)
        this._router.navigateByUrl("/contacts");
        },
      error: (error) => console.log(error),
      complete: () => console.log('Complete')
    });
  }
}
