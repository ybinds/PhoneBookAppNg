import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [
  { path: 'contacts', component: ContactListComponent},
  { path: 'contact/:id', component: ContactEditComponent},
  { path: '', component: ContactInfoComponent},
  { path: '**', component: ContactInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myComponents=[
  ContactEditComponent,
  ContactInfoComponent,
  ContactListComponent
]
