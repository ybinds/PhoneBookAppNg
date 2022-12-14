import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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
  submitted:boolean = false;
  /*@ViewChild('name')
  nameElementRef!: ElementRef;*/
  
  constructor(private _service: ContactService){}
  /*ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus();
  }*/

  createContact(contactForm:any){
    this._service.createContact(this.contactInfo).subscribe({
      next: (data) => {this.msg = data,
          this.contactInfo = new Contact(0,'','','');
          this.submitted = true;
        },
      error: (error) => console.log(error),
      complete: () => console.log('Complete')
    });
  }

  setSubmitted(){
    this.submitted = false;
  }
}
