import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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
  someSubscription: any;

  constructor(private _service: ContactService, 
    private _router: Router, 
    private _activatedRoute: ActivatedRoute
    ){}

  ngOnInit() {
   let word:any = this._activatedRoute.snapshot.paramMap.get('word');
   if(word!=null && word!=''){
      this.getContactListBySearch(word);
   }else{
    this.getContactList();
   }
   this.msg = this._service.getMessage();
   this._router.routeReuseStrategy.shouldReuseRoute = function () {
    return false;
  };
  this.someSubscription = this._router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      // Here is the dashing line comes in the picture.
      // You need to tell the router that, you didn't visit or load the page previously, so mark the navigated flag to false as below.
      this._router.navigated = false;
    }
  });
  }

  ngOnDestroy(){
    this._service.setMessage("");
    if (this.someSubscription) {
      this.someSubscription.unsubscribe();
    }
  }
  getContactListBySearch(word:string){
    this._service.getContactListBySearch(word).subscribe({
      next: (data) => (this.contacts=data),
      error: (error) => console.log(error),
      complete: () => console.log("Complete")
    });
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
