import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PhoneBookAppNg';
  word:string="";

  constructor(private _router: Router){}

  submitSearch(){
    this._router.navigate(['/contacts/',this.word]);
    this.word="";
  }
}
